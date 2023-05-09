import { Flex, Heading, Text } from '@chakra-ui/react'

export const Home = () => {
  return (
    <Flex
      h="100%"
      w="100%"
      direction="column"
      align="center"
      justify="center"
      flex="1"
      bgColor="#f6f7fe"
    >
      <Heading>Home</Heading>
      <Text>This is our HomePage</Text>
    </Flex>
  )
}
