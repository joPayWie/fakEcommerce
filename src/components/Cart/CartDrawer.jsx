import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Text,
} from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'

import { IoCart } from 'react-icons/io5'

import { LittleProductCard } from '../LittleProductCard'
import { useCartContext } from '../../context/CartContext'

import styles from './Cart.module.css'

export const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cart, resetCart } = useCartContext()

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
        <IoCart className={styles.cartIcon} />
        <Text>({cart.length})</Text>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your cart</DrawerHeader>

          <DrawerBody>
            {cart.map((product) => (
              <LittleProductCard key={product.id} product={product} />
            ))}
          </DrawerBody>

          <DrawerFooter pb={{ base: '20px', md: '15px' }}>
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={resetCart}
            >
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
