import heic2any from "heic2any";

export async function upload(file, folder, token, maxWidth = 2000, quality = 0.8) {
  if (file.type === "image/heic" || file.name.endsWith(".heic")) {
    const blob = await heic2any({
      blob: file,
      toType: "image/jpeg",
      quality,
    });
    file = new File([blob], file.name.replace(/\.[^/.]+$/, ".jpg"), { type: "image/jpeg" });
  }

  const imgBitmap = await createImageBitmap(file);
  if (imgBitmap.width > maxWidth) {
    const scale = maxWidth / imgBitmap.width;
    const canvas = new OffscreenCanvas(maxWidth, imgBitmap.height * scale);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(imgBitmap, 0, 0, canvas.width, canvas.height);
    const resizedBlob = await canvas.convertToBlob({ type: 'image/jpeg', quality });
    file = new File([resizedBlob], file.name, { type: 'image/jpeg' });
  }

  const sigRes = await fetch('/.netlify/functions/signUpload', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ folder }),
  });

  const sig = await sigRes.json();

  const formData = new FormData();
  formData.append('file', file);
  formData.append('api_key', sig.apiKey);
  formData.append('timestamp', sig.timestamp);
  formData.append('signature', sig.signature);
  formData.append('folder', folder);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${sig.cloudName}/image/upload`, {
    method: 'POST',
    body: formData,
  });

  return await res.json();
}
