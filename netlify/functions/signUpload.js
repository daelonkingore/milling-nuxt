import crypto from "crypto";

const ALLOWED_FOLDERS = [
  'samples',
  'wood-slabs',
  'wood-rounds',
  'submitted',
  'working',
  'people',
  'logs-to-mill',
  'beams-and-mantles'
]

export const handler = async (event) => {
  const token = event.headers.authorization?.split(' ')[1]

  if (!token) {
    return { statusCode: 401, body: 'Unauthorized' }
  }

  const { folder } = JSON.parse(event.body);

  // Reject disallowed folders
  if (!ALLOWED_FOLDERS.includes(folder)) {
    return { statusCode: 403, body: 'Folder not allowed' }
  }

  const timestamp = Math.round(Date.now() / 1000);

  const paramsToSign = `folder=${folder}&timestamp=${timestamp}${process.env.NUXT_CLOUDINARY_API_SECRET}`;

  const signature = crypto
    .createHash("sha1")
    .update(paramsToSign)
    .digest("hex");

  return {
    statusCode: 200,
    body: JSON.stringify({
      timestamp,
      signature,
      cloudName: process.env.NUXT_CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.NUXT_CLOUDINARY_API_KEY,
    }),
  };
};

