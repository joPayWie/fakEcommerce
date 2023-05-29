import { Button, Card, Flex, Heading, Image, Text } from '@chakra-ui/react'

import { BsFillTrash3Fill } from 'react-icons/bs'

import { useCartContext } from '../context/CartContext'

export const LittleProductCard = ({ product }) => {
  const { deleteItem, addToCart } = useCartContext()
  return (
    <Card
      key={product.id}
      direction="column"
      overflow="hidden"
      variant="outline"
      align="center"
      p={1}
      m={1}
    >
      <Flex alignSelf="self-start" alignItems="center" gap="5px">
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
      <Flex
        justify="center"
        m={3}
        align="center"
        p={2}
        bgColor="#dbfff2"
        rounded="md"
        w="100%"
      >
        <Flex align="center" gap="5px">
          <Button
            size="sm"
            colorScheme="teal"
            onClick={() => addToCart(product)}
          >
            +
          </Button>
          <Text>x {product.quantity}</Text>
          <Button
            size="sm"
            colorScheme="teal"
            isDisabled={product.quantity === 1}
            onClick={() => {
              addToCart(product, -1)
            }}
          >
            -
          </Button>
        </Flex>
        <Flex w="25%" justify="center">
          =
        </Flex>
        <Text fontWeight="700">${product.price * product.quantity}</Text>
      </Flex>
      <Flex w="100%" justify="end" align="center" gap="5px">
        <Text>Delete item:</Text>
        <Button
          variant="solid"
          colorScheme="red"
          aria-label="Delete items"
          w="50px"
          onClick={() => deleteItem(product.id)}
        >
          <BsFillTrash3Fill />
        </Button>
      </Flex>
    </Card>
  )
}
