import { useState } from 'react'

import {
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  IconButton,
  Flex,
  Box,
} from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'

import { HiUserCircle } from 'react-icons/hi'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

import { useUserContext } from '../../context/UserContext'
import { CartDrawer } from '../../components/CartDrawer'

import logo from '../../../src/assets/logo.png'
import styles from './Nav.module.css'

export const Nav = () => {
  const { loggedUser, handleLogout } = useUserContext()
  const [burgerDisplay, changeBurgerDisplay] = useState('none')

  return (
    <>
      <nav className={styles.navBar}>
        <img
          src={logo}
          alt="Logo"
          style={{ maxHeight: '100%', marginLeft: '1rem' }}
        />

        {/* DESKTOP */}
        <HStack
          display={{ base: 'none', md: 'flex' }}
          as="nav"
          gap="5%"
          fontWeight="semibold"
          px="4rem"
          mr="1rem"
        >
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
                bgColor="white"
                rounded="md"
                px=".5rem"
                aria-label="User menu"
                _hover={{
                  textDecoration: 'none',
                  bgColor: '#feb823',
                  color: 'white',
                }}
                _active={{
                  bgColor: '#feb823',
                  color: 'white',
                }}
              >
                <HiUserCircle size={22.5} />
              </MenuButton>
              <MenuList>
                <Text p={2} fontWeight="medium" textAlign="center">
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
          <CartDrawer />
        </HStack>

        {/* MOBILE */}
        <Box display={{ base: 'flex', md: 'none' }} fontWeight="semibold">
          <IconButton
            colorScheme="blue"
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            onClick={() => changeBurgerDisplay('flex')}
          />
          <Flex
            w="100vw"
            display={burgerDisplay}
            bgColor="gray.50"
            zIndex={20}
            pos="fixed"
            top="0"
            left="0"
            overflowY="auto"
            flexDir="column"
          >
            <Flex justify="space-between">
              <img src={logo} alt="Logo" style={{ maxHeight: '65px' }} />
              <IconButton
                colorScheme="blue"
                mt={2}
                mr={2}
                mb={2}
                aria-label="Close Menu"
                size="lg"
                icon={<CloseIcon />}
                onClick={() => changeBurgerDisplay('none')}
              />
            </Flex>

            <Flex flexDir="column" align="center">
              {loggedUser && <h1> Hello! {loggedUser.email}</h1>}
              <Button
                as={NavLink}
                to="/"
                color="#6482f3"
                w="100%"
                bgColor="white"
                _hover={{
                  textDecoration: 'none',
                  bgColor: '#6482f3',
                  color: 'white',
                }}
                onClick={() => changeBurgerDisplay('none')}
              >
                HOME
              </Button>
              <Button
                as={NavLink}
                to="/products"
                color="#f9643f"
                w="100%"
                bgColor="white"
                _hover={{
                  textDecoration: 'none',
                  bgColor: '#f9643f',
                  color: 'white',
                }}
                onClick={() => changeBurgerDisplay('none')}
              >
                PRODUCTS
              </Button>
              {loggedUser ? (
                <Button
                  color="#feb823"
                  w="100%"
                  bgColor="white"
                  _hover={{
                    textDecoration: 'none',
                    bgColor: '#feb823',
                    color: 'white',
                  }}
                  onClick={() => {
                    handleLogout
                    changeBurgerDisplay('none')
                  }}
                >
                  LOGOUT
                </Button>
              ) : (
                <Button
                  as={NavLink}
                  to="/login"
                  color="#feb823"
                  w="100%"
                  bgColor="white"
                  _hover={{
                    textDecoration: 'none',
                    bgColor: '#feb823',
                    color: 'white',
                  }}
                  onClick={() => changeBurgerDisplay('none')}
                >
                  LOGIN
                </Button>
              )}
              <CartDrawer />
            </Flex>
          </Flex>
        </Box>
      </nav>
    </>
  )
}
