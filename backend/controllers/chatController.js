import { chats } from "../data/data.js"

export const getChats = (req, res) => {
    res.json(chats)
}

export const getChat = (req, res) => {

    const singleChat = chats.find(chat => chat._id === req.params.id)

    if(!singleChat){
        console.log("Doesn't exists the chat")

        return
    }
    res.json(singleChat)
}