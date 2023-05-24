import { Flex, Heading, Input, Button, FormControl } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useCartContext } from '../context/CartContext'
import { useUserContext } from '../context/UserContext'
import { createOrder } from '../services/products'

export const CheckOut = () => {
  const { cart, calculateTotal, resetCart } = useCartContext()
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
    <Flex>
      <Flex>
        <Heading>Generate order</Heading>
        <Flex>Here goes your product</Flex>
      </Flex>
      <Flex>
        <Heading>Contact information</Heading>
        <form type="submit" onSubmit={handleSubmit(submitOrder)}>
          <FormControl isInvalid={errors.name}>
            <label>Name</label>
            <Input
              {...register('name', {
                required: 'Please complete this field',
              })}
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
            />
          </FormControl>
          <FormControl isInvalid={errors.zipCode}>
            <label>ZIP code</label>
            <Input
              {...register('zipCode', {
                required: 'Please complete this field',
              })}
            />
          </FormControl>

          <Flex>
            <Heading>Total:</Heading>
            <Heading>{calculateTotal()}</Heading>
          </Flex>
          <Button type="submit" isLoading={isSubmitting}>
            Place order
          </Button>
        </form>
      </Flex>
    </Flex>
  )
}
