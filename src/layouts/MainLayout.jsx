import { Stack, Flex } from '@chakra-ui/react'

import { Nav } from './layoutComponents/Nav'
import { Footer } from './layoutComponents/Footer'

export const MainLayout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Nav />
      <Stack h="100%" flex="1">
        {children}
      </Stack>
      <Footer />
    </Flex>
  )
}
