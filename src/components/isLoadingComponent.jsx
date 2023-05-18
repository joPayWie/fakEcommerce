import { Flex, Spinner } from '@chakra-ui/react'

import logo from '../assets/logo.png'

export const isLoadingComponent = () => {
  return (
    <Flex w="100%" h="100%">
      <img src={logo} alt={logo} style={{ height: '50px' }} />
      <Spinner />
    </Flex>
  )
}
