import { Flex, Heading, Input, Button } from '@chakra-ui/react'

export const CheckOut = () => {
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
          <Input type="email" />
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
