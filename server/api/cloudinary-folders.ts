import { v2 as cloudinary } from 'cloudinary'

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })

export default defineEventHandler(async () => {
  const result = await cloudinary.api.root_folders()
  return result.folders.map(f => f.name)
})