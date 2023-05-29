import {
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import { IoCart } from 'react-icons/io5'

import { useCartContext } from '../context/CartContext'

export const ProductCard = ({ product }) => {
  const { id, image, name, description, price } = product
  const { addToCart } = useCartContext()
  const toast = useToast()

  return (
    <Card m="3">
      <CardBody>
        <Box maxW={{ base: '100%', md: '92.5%' }}>
          <Link to={id}>
            <Image
              src={image}
              alt={name}
              borderRadius="lg"
              style={{ objectFit: 'cover' }}
            />
          </Link>
        </Box>
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
          <Text color="gray.600" fontSize="2xl" fontWeight="bold">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider borderColor={useColorModeValue('gray.300', 'gray.600')} />
      <CardFooter justify="center">
        <ButtonGroup
          spacing="2"
          size={{ base: 'md' }}
          flexDirection={{ md: 'column', lg: 'row' }}
        >
          <Button
            as={Link}
            to={id}
            variant="ghost"
            colorScheme="blue"
            _hover={{
              bgColor: '#ebedef',
            }}
          >
            Details
          </Button>
          <Button
            colorScheme="blue"
            gap={2}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            onClick={() => {
              addToCart(product)
              toast({
                title: 'Succesful!',
                description: 'The product was successfully added to cart',
                status: 'success',
                duration: 2000,
                isClosable: true,
              })
            }}
          >
            <span style={{ color: 'white' }}>Add to cart</span>
            <IoCart size={22.5} />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
