import { Link, Outlet } from 'react-router-dom'

import { Flex, Button, Text } from '@chakra-ui/react'

import { AiOutlineArrowLeft } from 'react-icons/ai'

import bgImg from '../assets/bg3.jpg'

export const FormLayout = () => {
  return (
    <Flex h="100vh" w="100%" direction="column" bgImage={bgImg} bgSize="cover">
      <Flex
        h="100vh"
        w="100%"
        direction="column"
        align="center"
        justify="space-between"
      >
        <Button
          as={Link}
          to="/products"
          alignSelf="start"
          colorScheme="whiteAlpha"
          color="black"
        >
          <AiOutlineArrowLeft />
          <Text ml={3}>Continue shopping</Text>
        </Button>
        <Flex
          h="100vh"
          w="100%"
          direction="column"
          align="center"
          justify="center"
        >
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  )
}
