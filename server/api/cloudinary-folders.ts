import { v2 as cloudinary } from "cloudinary"

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  cloudinary.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret,
  })

  const result = await cloudinary.api.root_folders()

  return result.folders.map(f => f.name)
})