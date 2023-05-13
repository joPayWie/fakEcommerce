import { Flex, Heading, Text, IconButton } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Flex
      h="100%"
      w="100%"
      direction="column"
      align="center"
      justify="center"
      flex="1"
      bgColor="#dadefb"
    >
      <Heading>404</Heading>
      <Text>Sorry, this page isn't available</Text>
      <IconButton
        onClick={() => navigate(-1)}
        colorScheme="blue"
        icon={<AiOutlineArrowLeft size={25} />}
      ></IconButton>
    </Flex>
  )
}
