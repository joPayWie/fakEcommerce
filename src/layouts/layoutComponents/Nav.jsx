import {
  Flex,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useDisclosure,
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
} from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'

import { IoCart } from 'react-icons/io5'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { HiUserCircle } from 'react-icons/hi'

import { useUserContext } from '../../context/UserContext'
import { useCartContext } from '../../context/CartContext'

import logo from '../../../src/assets/logo.png'
import styles from './Nav.module.css'

export const Nav = () => {
  const { loggedUser, handleLogout } = useUserContext()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cart, deleteItem, resetCart } = useCartContext()

  return (
    <>
      <nav className={styles.navBar}>
        <img
          src={logo}
          alt="Logo"
          style={{ maxHeight: '100%', marginLeft: '1rem' }}
        />
        <HStack as="nav" gap="5%" fontWeight="semibold" px="4rem" mr="1rem">
          <Link
            as={NavLink}
            to="/"
            color="#6482f3"
            rounded="md"
            px=".5rem"
            _hover={{
              textDecoration: 'none',
              bgColor: '#6482f3',
              color: 'white',
            }}
          >
            HOME
          </Link>
          <Link
            as={NavLink}
            to="/products"
            color="#f9643f"
            rounded="md"
            px=".5rem"
            _hover={{
              textDecoration: 'none',
              bgColor: '#f9643f',
              color: 'white',
            }}
          >
            PRODUCTS
          </Link>
          {loggedUser ? (
            <Menu>
              <MenuButton
                as={Button}
                color="#feb823"
                rounded="md"
                px=".5rem"
                _hover={{
                  textDecoration: 'none',
                  bgColor: '#feb823',
                  color: 'white',
                }}
              >
                <HiUserCircle />
              </MenuButton>
              <MenuList>
                <Text p={2} fontWeight="medium">
                  {loggedUser.email}
                </Text>
                <MenuItem as={Button} onClick={handleLogout}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Link
              as={NavLink}
              to="/login"
              color="#feb823"
              rounded="md"
              px=".5rem"
              _hover={{
                textDecoration: 'none',
                bgColor: '#feb823',
                color: 'white',
              }}
            >
              LOGIN
            </Link>
          )}

          <Flex
            as={Button}
            color="#00cb7f"
            rounded="md"
            p=".5rem"
            bgColor="transparent"
            _hover={{
              textDecoration: 'none',
              bgColor: '#00cb7f',
              color: 'white',
            }}
            onClick={onOpen}
          >
            <IoCart size={30} />
          </Flex>
        </HStack>
      </nav>

      {/* CART */}

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
                    <Text py="2">${product.price}</Text>
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

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={resetCart}>
              Delete all
            </Button>
            <Button as={NavLink} to="/checkout" colorScheme="blue">
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
