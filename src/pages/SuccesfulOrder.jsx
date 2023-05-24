import { Flex, Heading, Text } from '@chakra-ui/react'

import bgImg from '../assets/bg3.jpg'

export const SuccesfulOrder = () => {
  return (
    <Flex
      h="100%"
      w="100%"
      direction="column"
      align="center"
      justify="center"
      flex="1"
      bgImage={bgImg}
      bgSize="cover"
    >
      <Heading>Excellent!</Heading>
      <Text>Your order was created successfully</Text>
    </Flex>
  )
}
