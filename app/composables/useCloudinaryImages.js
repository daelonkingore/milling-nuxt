import { ref } from 'vue'

export function useCloudinaryImages() {
  const images = ref([])
  const loading = ref(false)

  async function loadImages(folder) {
    if (!folder) return

    loading.value = true

    try {
      const res = await fetch(
        `/api/cloudinary-images?folder=${folder}`
      )

      images.value = await res.json()
    } finally {
      loading.value = false
    }
  }

  return {
    images,
    loading,
    loadImages,
  }
}