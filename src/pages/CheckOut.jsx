import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  Card,
  Image,
  Stack,
  CardBody,
  Text,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useCartContext } from '../context/CartContext'
import { useUserContext } from '../context/UserContext'
import { createOrder } from '../services/products'
import { BsFillTrash3Fill } from 'react-icons/bs'

import bgImg from '../assets/bg3.jpg'
import styles from './Pages.module.css'

export const CheckOut = () => {
  const { cart, calculateTotal, resetCart, deleteItem } = useCartContext()
  const { loggedUser } = useUserContext()
  const navigate = useNavigate()

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
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
    }
  }

  return (
    <Flex justify="space-around" p={5} bgImage={bgImg} bgSize="cover">
      <Flex direction="column" gap="15px">
        <Heading>Your products</Heading>
        <Flex>
          {cart.map((product) => (
            <Card
              key={product.id}
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="outline"
              padding={2}
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
        </Flex>
      </Flex>
      <Flex direction="column" gap="15px" alignItems="flex-start">
        <Heading>Contact information</Heading>
        <form
          className={styles.checkoutForm}
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
          <Button colorScheme="green" type="submit" isLoading={isSubmitting}>
            Place order
          </Button>
        </form>
      </Flex>
    </Flex>
  )
}
