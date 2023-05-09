import { Flex, Heading, Text } from '@chakra-ui/react'

export const NotFound = () => {
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
      <Heading>404</Heading>
      <Text>Sorry, this page isn't available</Text>
    </Flex>
  )
}
