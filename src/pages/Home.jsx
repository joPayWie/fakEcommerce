import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import bgImg from '../assets/bg3.jpg'
import baby1 from '../assets/baby1.png'
import baby2 from '../assets/baby2.jpg'

export const Home = () => {
  return (
    <Flex
      h="100%"
      w="100%"
      direction={{ base: 'column', lg: 'row' }}
      align="center"
      justify="center"
      flex="1"
      bgImage={bgImg}
      bgSize="cover"
      gap="15px"
    >
      <Image
        src={baby1}
        alt="Baby playing"
        maxW={{ base: '55%', md: '33%' }}
        rounded="lg"
        alignSelf={{ base: 'self-start', lg: 'center' }}
        m={2}
      />
      <Flex
        bgColor="white"
        p={5}
        rounded="lg"
        direction="column"
        gap="25px"
        justify="center"
        align="center"
      >
        <Heading>
          Welcome to
          <Flex justify="center">
            <Text color="#F9643F">R</Text>
            <Text color="#FEB823">A</Text>
            <Text color="#00CB7F">I</Text>
            <Text color="#6482F3">N</Text>
            <Text color="#F9643F">B</Text>
            <Text color="#00CB7F">O</Text>
            <Text color="#FEB823">W</Text>
          </Flex>
          <Text fontSize="xs" fontWeight="400" textAlign="center">
            (fakE-commerce)
          </Text>
        </Heading>
        <Text>Cute stuff for babies and toddlers!</Text>
        <Button as={Link} to="/products" colorScheme="blue">
          Watch our products
        </Button>
      </Flex>
      <Image
        src={baby2}
        alt="Babies playing"
        maxW={{ base: '55%', md: '33%' }}
        rounded="lg"
        alignSelf={{ base: 'self-end', lg: 'center' }}
        m={2}
      />
    </Flex>
  )
}
