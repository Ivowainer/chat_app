import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react"
import { useState } from "react"

const Login = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = () => {
        console.log('object')
    }

    return (
        <VStack spacing="5px" color="black">
            <FormControl id="email" isRequired>
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
            >
                Login
            </Button>

            <Button
                variant="solid"
                colorSchema="blue"
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