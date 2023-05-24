import {
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'

import { HiUserCircle } from 'react-icons/hi'

import { useUserContext } from '../../context/UserContext'
import { CartDrawer } from '../../components/CartDrawer'

import logo from '../../../src/assets/logo.png'
import styles from './Nav.module.css'

export const Nav = () => {
  const { loggedUser, handleLogout } = useUserContext()

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
                bgColor="white"
                rounded="md"
                px=".5rem"
                _hover={{
                  textDecoration: 'none',
                  bgColor: '#feb823',
                  color: 'white',
                }}
              >
                <HiUserCircle size={22.5} />
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
          <CartDrawer />
        </HStack>
      </nav>
    </>
  )
}
