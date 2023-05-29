import { useState } from 'react'

import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  SimpleGrid,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useCartContext } from '../context/CartContext'
import { useUserContext } from '../context/UserContext'
import { createOrder } from '../services/products'
import { LittleProductCard } from '../components/LittleProductCard'

import bgImg from '../assets/bg3.jpg'

import styles from './Pages.module.css'

export const CheckOut = () => {
  const { cart, calculateTotal, resetCart } = useCartContext()
  const { loggedUser } = useUserContext()
  const navigate = useNavigate()
  const [authError, setAuthError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const submitOrder = async (consumerObject) => {
    try {
      await createOrder({
        consumer: {
          name: consumerObject.name,
          email: loggedUser.email,
          address: consumerObject.address,
          zipCode: consumerObject.zipCode,
        },
        cart: cart,
        total: calculateTotal(),
      })
      resetCart()
      navigate('/succesfulorder')
    } catch (e) {
      setAuthError(true)
    }
  }

  return (
    <SimpleGrid
      columns={{ base: '1', lg: '2' }}
      p={5}
      bgImage={bgImg}
      bgSize="cover"
      gap="25px"
    >
      <Flex direction="column" gap="15px">
        <Heading>Your products</Heading>

        {cart.length === 0 ? (
          <Flex
            rounded="md"
            p={3}
            fontSize={20}
            textAlign="center"
            className={styles.glass}
          >
            Oops! It seems that there are no products in your cart.
          </Flex>
        ) : (
          <SimpleGrid columns={{ base: '1', md: '2' }}>
            {cart.map((product) => (
              <LittleProductCard key={product.id} product={product} />
            ))}
          </SimpleGrid>
        )}
      </Flex>
      <Flex direction="column" gap="15px" alignItems="flex-start">
        <Heading>Contact information</Heading>
        <form
          className={`${styles.glass} ${styles.checkoutForm}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '5px',
          }}
          type="submit"
          onSubmit={handleSubmit(submitOrder)}
        >
          <FormControl isInvalid={errors.name}>
            <label>Name</label>
            <Input
              {...register('name', {
                required: 'Please complete this field',
              })}
              bgColor="white"
            />
          </FormControl>

          <label>Email</label>
          <Input type="email" value={loggedUser.email} readOnly />
          <FormControl isInvalid={errors.address}>
            <label>Address</label>
            <Input
              {...register('address', {
                required: 'Please complete this field',
              })}
              bgColor="white"
            />
          </FormControl>
          <FormControl isInvalid={errors.zipCode}>
            <label>ZIP code</label>
            <Input
              {...register('zipCode', {
                required: 'Please complete this field',
              })}
              bgColor="white"
            />
          </FormControl>

          <Flex alignSelf="self-end" gap="15px" alignItems="center">
            <Heading size="md">Total:</Heading>
            <Heading size="lg">${calculateTotal()}</Heading>
          </Flex>
          {authError && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Your order could not be fulfilled </AlertTitle>
              <AlertDescription fontWeight="500">
                Please try again.
              </AlertDescription>
            </Alert>
          )}
          <Button colorScheme="green" type="submit" isLoading={isSubmitting}>
            Place order
          </Button>
        </form>
      </Flex>
    </SimpleGrid>
  )
}
