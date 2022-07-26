import axios from 'axios'
import { useEffect, useState } from 'react'

const ChatPage = () => {
    const [chats, setChats] = useState([])

    useEffect(() => {
        const fetchChats = async () => {
            const { data } = await axios.get(`/api/chats`)
    
            setChats(data)
        }

        fetchChats()
    }, [])

    return (
        <div>
            {chats.map(chat => (
                <div key={chat._id}>
                    {chat.chatName}
                </div>
            ))}
        </div>
    )
}

export default ChatPage