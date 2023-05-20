import { Flex, Heading, Input, Button } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'

import { useCartContext } from '../context/CartContext'
import { useUserContext } from '../context/UserContext'
import { createOrder } from '../services/products'

export const CheckOut = () => {
  const { cartContent } = useCartContext()
  const { loggedUser } = useUserContext()

  const submitOrder = async (consumerObject) => {
    try {
      await createOrder({
        consumer: consumerObject,
        cart: cartContent,
        // total: esto lo calcula la función que viene de CartContext
      })
    } catch (error) {
      // bla bla
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
        <form>
          <label>Name</label>
          <Input type="text" />
          <label>Email</label>
          <Input type="email" value={loggedUser.email} readOnly />
          <label>Address</label>
          <Input type="text" />
          <label>ZIP code</label>
          <Input type="number" />
          <Flex>
            <Heading>Total:</Heading>
            <Heading>Here comes the total price</Heading>
          </Flex>
          <Button>Place order</Button>
        </form>
      </Flex>
    </Flex>
  )
}
