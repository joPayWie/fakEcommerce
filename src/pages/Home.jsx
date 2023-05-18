import { Flex, Heading, Text } from '@chakra-ui/react'

import bgImg from '../assets/bg3.jpg'

export const Home = () => {
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
      <Heading>Home</Heading>
      <Text>This is our HomePage</Text>
    </Flex>
  )
}
