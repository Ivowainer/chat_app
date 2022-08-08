import cloudinary from 'cloudinary'
import 'dotenv/config'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

export const uploadImage = async filePath => {
    return await cloudinary.v2.uploader.upload(filePath, {
        folder: 'chat-app'
    })
}

export const deleteImage = async id => {
    cloudinary.uploader.destroy(id)
}