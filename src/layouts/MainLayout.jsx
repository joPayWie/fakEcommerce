import { Stack, Flex } from '@chakra-ui/react'

import { Outlet } from 'react-router-dom'

import { Nav } from './layoutComponents/Nav'
import { Footer } from './layoutComponents/Footer'

export const MainLayout = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Nav />
      <Stack h="100%" flex="1">
        <Outlet />
      </Stack>
      <Footer />
    </Flex>
  )
}
