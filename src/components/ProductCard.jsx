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
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import { IoCart } from 'react-icons/io5'

export const ProductCard = ({ product }) => {
  const { id, image, name, description, price } = product
  return (
    <Card m="3">
      <CardBody>
        <Box maxW={{ base: '100%', md: '92.5%' }}>
          <Image
            src={image}
            alt={name}
            borderRadius="lg"
            style={{ objectFit: 'cover' }}
          />
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
      <CardFooter>
        <ButtonGroup
          spacing="2"
          size={{ base: 'md' }}
          flexDirection={{ md: 'column', lg: 'row' }}
        >
          <Button as={Link} to={id} variant="ghost" colorScheme="blue">
            Details
          </Button>
          <Button colorScheme="blue" gap={2}>
            <span style={{ color: 'white' }}>Add to cart</span>
            <IoCart size={22.5} />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
