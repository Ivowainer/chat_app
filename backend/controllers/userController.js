import { uploadImage } from '../config/cloudinary.js'
import fs from 'fs-extra'
import generateToken from '../config/generateToken.js'
import User from '../models/userModel.js'

export const registerUser = async (req, res) => {
    const { name, email, password, pic } = req.body

    if([name, email, password].includes('')) {
        res.status(400)
        throw new Error('Please enter all the fields')
    }

    const userExists = await User.findOne({ email })

    if(userExists) {
        res.status(400)
        throw new Error("User already exists")
    }
    
    try {
        const user = await User.create({ name, email, password, pic })

        res.status(200).json({
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        })
    } catch (error) {
        console.log(error)
    }
}

export const handlerUploadImg = async (req, res) => {

        /* const result = await uploadImage(req.files.image.tempFilePath) */
        /* const image = {
            url: result.secure_url,
            public_id: result.public_id
        }
        await fs.remove(req.files.image.tempFilePath)

        res.json({ image }) */

        /* const user = await User.findById(req.params.id)
        let image;

        if(!req.files?.image){
            const error = new Error("Doesn't exists the image")
            return res.status(403).json({ msg: error.message })
        }
        if(user.image.url != undefined){
            // Eliminar foto anterior
            const deleteImg = await deleteImgCloudinary(user.bgImage.public_id)
        }

        const result = await uploadImgCloduinary(req.files.bgImage.tempFilePath)
        image = {
            url: result.secure_url,
            public_id: result.public_id
        }
        await fs.remove(req.files.bgImage.tempFilePath)

        user.pic = image

        const userUpdated = await user.save()

        res.json( userUpdated.bgImage )
    } catch (error) {
        console.log(error)
    } */
}

export const authUser = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(user && (await user.matchPassword(password))) {
        res.json({
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        })
    } else {
        return res.status(403).json({ error: "The email or password are wrong" })
    }

}