import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react"
import { useState } from "react"

const Signup = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [pic, setPic] = useState('')

    const postDetails = pics => {
        console.log(pics)
    }

    const submitHandler = () => {
        console.log('dd')
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
                    <InputRightElement width="4.5em">
                        <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
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