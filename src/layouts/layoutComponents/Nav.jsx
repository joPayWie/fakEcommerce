import { Flex, HStack, Link, Button } from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'

import { IoCart } from 'react-icons/io5'

import logo from '../../../src/assets/logo.png'
import styles from './Nav.module.css'

export const Nav = () => {
  return (
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
        >
          <IoCart size={30} />
        </Flex>
      </HStack>
    </nav>
  )
}
