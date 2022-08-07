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
            password: user.password,
            pic: user.pìc,
            token: generateToken(user._id)
        })
    } catch (error) {
        console.log(error)
    }
}

export const authUser = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(user && (await User.matchPassword(password))) {
        res.json({
            name: user.name,
            email: user.email,
            password: user.password,
            pic: user.pìc,
            token: generateToken(user._id)
        })
    }

}