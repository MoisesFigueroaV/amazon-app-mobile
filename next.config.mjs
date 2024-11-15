import { resolve } from "path"; // Importa la función resolve desde el módulo 'path'

export default {
  images: {
    domains: ["res.cloudinary.com", 'via.placeholder.com'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      cloudinary: resolve(process.cwd(), "node_modules/cloudinary"), // Asegúrate de usar resolve correctamente
    };
    return config;
  },
};
