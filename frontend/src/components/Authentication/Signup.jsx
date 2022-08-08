import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from "@chakra-ui/react"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const toast = useToast()
    const navigate = useNavigate();

    const [show, setShow] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [pic, setPic] = useState('')
    const [loading, setLoading] = useState(false)

    const postDetails = async pics => {
        setLoading(true)
        /* if(pic === undefined){
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            })

            return;
        }

        if(pics.type === "image/jpeg" || pics.type === "image/png") {
            const { data }  = await axios.post(`http://localhost:5000/api/user/uploadImg`, { pics }, {
                headers: { "Content-Type": "multipart/form-data" }
            })
        } */
    }

    const submitHandler = async () => {
        setLoading(true)
        if([name, email, password, confirmPassword].includes('')){
            toast({
                title: "Please Fill all the fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }

        if(password !== confirmPassword) {
            toast({
                title: "Passwords do not match",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });

            return;
        }

        try {
            const { data } = await axios.post('/api/user', {name, email, password, pic})

            toast({
                title: "Registration Successful",
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
                description: error.response.data.message,
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
        }
    }

    return (
        <VStack spacing="5px" color="black">
            <FormControl id="first-name" isRequired mb="10px">
                <FormLabel>Name</FormLabel>
                <Input 
                    placeholder="Enter Your Name"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
            </FormControl>

            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input 
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </FormControl>

            <FormControl id="password" isRequired mb="10px">
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

            <FormControl id="confirm-password" isRequired mb="10px">
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input 
                        type={show ? "text" : "password"}
                        placeholder="Repeat your password"
                        onChange={e => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                </InputGroup>
            </FormControl>

            <FormControl id="pic" isRequired mb="10px">
                <FormLabel>Upload your Picture</FormLabel>
                <Input 
                    type="file"
                    p={1.5}
                    accept="image/"
                    onChange={e => postDetails(e.target.files[0])}
                    value={pic}
                />
            </FormControl>

            <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15}}
                onClick={submitHandler}
            >
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup