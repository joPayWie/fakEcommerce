import {
  Button,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  useDisclosure,
  Flex,
} from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'

import { BsFillTrash3Fill } from 'react-icons/bs'
import { IoCart } from 'react-icons/io5'

import { useCartContext } from '../context/CartContext'

export const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cart, deleteItem, resetCart } = useCartContext()

  return (
    <>
      <Flex
        as={Button}
        color="#00cb7f"
        rounded="md"
        p=".5rem"
        bgColor="white"
        w="100%"
        _hover={{
          textDecoration: 'none',
          bgColor: '#00cb7f',
          color: 'white',
        }}
        onClick={onOpen}
        aria-label="Cart"
      >
        <IoCart size={30} />
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your cart</DrawerHeader>

          <DrawerBody>
            {cart.map((product) => (
              <Card
                key={product.id}
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="outline"
              >
                <Image maxH="50px" src={product.image} alt={product.name} />

                <Stack>
                  <CardBody>
                    <Heading size="sm">{product.name}</Heading>
                    <Text>x {product.quantity}</Text>
                    <Text py="2">${product.price * product.quantity}</Text>
                    <Button
                      variant="solid"
                      colorScheme="red"
                      onClick={() => deleteItem(product.id)}
                    >
                      <BsFillTrash3Fill />
                    </Button>
                  </CardBody>
                </Stack>
              </Card>
            ))}
          </DrawerBody>

          <DrawerFooter pb={{ base: '20px', md: '15px' }}>
            <Button variant="outline" mr={3} onClick={resetCart}>
              Delete all
            </Button>
            <Button
              as={NavLink}
              to={cart.length > 0 ? '/checkout' : '#'}
              colorScheme="blue"
              onClick={onClose}
              isDisabled={!cart.length > 0}
            >
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
