import { Container, Box, Text, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box 
        d="flex" 
        justifyContent="center" 
        bg="white" 
        p={3} 
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text textAlign="center" fontSize="4xl" fontFamily="Work sans" color="black">Another Chat App</Text>
      </Box>

      <Box
        d="flex" 
        justifyContent="center" 
        bg="white" 
        p={3} 
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        color="black"
      >
        <Tabs variant='soft-rounded'>
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default HomePage