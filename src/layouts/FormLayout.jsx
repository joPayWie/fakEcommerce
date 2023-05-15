import { Outlet } from 'react-router-dom'

import { Flex } from '@chakra-ui/react'

import bgImg from '../assets/bg3.jpg'

export const FormLayout = () => {
  return (
    <Flex
      h="100vh"
      w="100%"
      direction="column"
      align="center"
      justify="center"
      bgImage={bgImg}
      bgSize="cover"
    >
      <Outlet />
    </Flex>
  )
}
