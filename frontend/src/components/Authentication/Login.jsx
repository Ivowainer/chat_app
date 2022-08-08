import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useToast, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {
    const toast = useToast()
    const navigate = useNavigate()

    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const submitHandler = async () => {
        setLoading(true)

        if([email, password].includes('')){
            toast({
                title: "Please fill all the fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
            setLoading(false)
            return;
        }

        try {
            const { data } = await axios.post('/api/user/login', {email, password})

            toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });

            localStorage.setItem('userInfo', JSON.stringify(data))

            setLoading(false)
            navigate('/chats')
        } catch (error) {
            console.log(error)

            toast({
                title: "Error Ocurred!",
                description: error.response.data.error,
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
        }

    }

    return (
        <VStack spacing="5px" color="black">
            <FormControl id="email" isRequired mb="1em">
                <FormLabel>Email</FormLabel>
                <Input 
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input 
                        type={show ? "text" : "password"}
                        placeholder="Enter a Password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <InputRightElement width="4.5em">
                        <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15}}
                onClick={submitHandler}
                isLoading={loading}
            >
                Login
            </Button>

            <Button
                variant="solid"
                width="100%"
                onClick={() => {
                    setEmail('guest@example.com')
                    setPassword('mamala123')
                    
                }}
            >
                Get Guest User Credentials
            </Button>
        </VStack>
    )
}

export default Login