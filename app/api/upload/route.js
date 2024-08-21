// app/api/upload/route.js
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

// Configuración de Cloudinary
cloudinary.config({
  cloud_name: 'dqov04wqn', 
  api_key: '776779584547866', 
  api_secret: jEHUg0w62XECxWFAJawHJ_Tyf9o, // Asegúrate de usar variables de entorno
});

export async function POST(req) {
  try {
    // Lee los datos de la solicitud
    const formData = await req.formData();
    const file = formData.get('file'); // 'file' es el campo que contiene la imagen

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Sube la imagen a Cloudinary
    const uploadResult = await cloudinary.uploader.upload(file.path, {
      folder: 'uploads', // Puedes ajustar la carpeta en Cloudinary
    });

    // Devuelve el resultado de la carga
    return NextResponse.json({ uploadResult });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json({ error: 'Error uploading image' }, { status: 500 });
  }
}
