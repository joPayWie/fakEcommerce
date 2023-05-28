import { Button, Card, Flex, Heading, Image, Text } from '@chakra-ui/react'

import { BsFillTrash3Fill } from 'react-icons/bs'

import { useCartContext } from '../context/CartContext'

export const LittleProductCard = ({ product }) => {
  const { deleteItem } = useCartContext()
  return (
    <Card
      key={product.id}
      direction="column"
      overflow="hidden"
      variant="outline"
      p={1}
      my={1}
    >
      <Flex alignItems="center">
        <Image
          maxHeight="75px"
          rounded="lg"
          src={product.image}
          alt={product.name}
          fit="cover"
        />
        <Flex w="100%" justify="center">
          <Heading size="sm">{product.name}</Heading>
        </Flex>
      </Flex>
      <Flex justify="center" m={3}>
        <Text>x {product.quantity}</Text>
        <Flex w="25%" justify="center">
          =
        </Flex>
        <Text fontWeight="700">${product.price * product.quantity}</Text>
      </Flex>
      <Flex w="100%" justify="end">
        <Button
          variant="solid"
          colorScheme="red"
          w="50px"
          onClick={() => deleteItem(product.id)}
        >
          <BsFillTrash3Fill />
        </Button>
      </Flex>
    </Card>
  )
}
