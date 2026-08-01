<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import Gallery from '@/components/galleryGrid.vue'
import { upload } from '@/composables/handleImages'
import netlifyIdentity from 'netlify-identity-widget'

const file = ref(null)
const selectedFolder = ref(null)
const images = ref([])
const uploading = ref(false)
const user = ref(null)       // track logged-in user
const loadingUser = ref(true) // track identity initialization

netlifyIdentity.init({
  showSignup: false // hide sign-up completely
})

// Handle login/logout events
netlifyIdentity.on('login', u => {
  user.value = u
  netlifyIdentity.close()
  loadImages() // load images immediately after login
})

netlifyIdentity.on('logout', () => {
  user.value = null
  images.value = []
})

// Check if already logged in
onMounted(() => {
  const current = netlifyIdentity.currentUser()
  if (current) user.value = current
  loadingUser.value = false
})

async function loadImages() {
  if (!selectedFolder.value || !user.value) return
  const res = await fetch(
    `/.netlify/functions/cloudinary-images?folder=${selectedFolder.value}`
  )
  images.value = await res.json()
}

function mapCloudinaryImage(img) {
  return {
    url: img.secure_url,
    public_id: img.public_id,
    width: img.width,
    height: img.height,
  }
}

// Watch folder changes
watch(selectedFolder, loadImages, { immediate: true })

async function uploadImage() {
  if (!file.value || !selectedFolder.value || !user.value) return

  const token = user.value.token.access_token

  uploading.value = true
  try {
    const result = await upload(file.value, selectedFolder.value, token)
    images.value.unshift(mapCloudinaryImage(result))
  } finally {
    uploading.value = false
    file.value = null
  }
}

async function delImage(image) {
  if (!user.value) return

  const token = user.value.token.access_token

  console.log("image: " + image)
  console.log(JSON.stringify(image, null, 2))
  console.log("image.public_id: " + image?.public_id)

  await fetch('/.netlify/functions/deleteImage', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ public_id: image.public_id }),
  })

  images.value = images.value.filter(img => img.public_id !== image.public_id)
  await loadImages()
}

function login() {
  netlifyIdentity.open('login')
}

function logout() {
  netlifyIdentity.logout()
}

const page = {
  gallery: {
    gridCols: 4,
    mobileCols: 2,
    imageHeight: '300px',
    contain: false
  }
}

const canUpload = computed(() => {
  return !!file.value && !!selectedFolder.value && !uploading.value
})
</script>

<template>
  <div v-if="loadingUser">Loading...</div>

  <div v-else-if="!user">
    <v-btn color="primary" @click="login">Admin Login</v-btn>
  </div>

  <div v-else>
    <h2>Welcome, {{ user.user_metadata.full_name || user.email }}</h2>
    <v-btn color="error" @click="logout">Logout</v-btn>

    <v-file-input
      v-model="file"
      accept="image/*"
      label="Select Image"
    />

    <v-btn
      :disabled="!canUpload"
      :loading="uploading"
      @click="uploadImage"
    >
      Upload
    </v-btn>

    <Gallery
        :grid-cols="page.gallery.gridCols"
        :mobile-cols="page.gallery.mobileCols"
        :image-height="page.gallery.imageHeight"
        :contain="page.gallery.contain"
        :deletable="true"
        @delete="delImage"
        v-model="selectedFolder"
    />
  </div>
</template>
