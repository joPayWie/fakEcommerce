import { Flex, Spinner } from '@chakra-ui/react'

import logo from '../assets/logo.png'

export const IsLoading = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      justify="center"
      alignItems="center"
      direction="column"
    >
      <img src={logo} alt={logo} style={{ height: '200px' }} />
      <Spinner size="lg" color="blue.500" />
    </Flex>
  )
}
