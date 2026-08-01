import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NUXT_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NUXT_CLOUDINARY_API_KEY,
  api_secret: process.env.NUXT_CLOUDINARY_API_SECRET,
})

export const handler = async (event) => {
  const token = event.headers.authorization?.split(' ')[1]

  if (!token) {
    return { statusCode: 401, body: 'Unauthorized' }
  }

  try {
    console.log("event.body:", event.body);

    const body = event.body ? JSON.parse(event.body) : {}
    console.log("json parse body: " + body)

    const { public_id } = body

    const result = await cloudinary.uploader.destroy(public_id, {
      resource_type: 'image',
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result }),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    }
  }
}
