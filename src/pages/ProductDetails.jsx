import { useContext } from 'react'

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  IconButton,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react'

import { IoCart } from 'react-icons/io5'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import { CartContext } from '../context/CartContext'
import { products } from '../data/products'

// import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const ProductDetails = () => {
  // const param = useParams()
  // esto es para usar el valor del param (id del producto en este caso) y poder encontrar el producto específico

  // const product = buscar producto en la database
  // acá puedo usar un useMemo para guardar el producto que me traiga la database

  const navigate = useNavigate()
  // la función navigate debemos usarla dentro de la función de agregar al carrito
  // permite que nos movamos en rutas dependiendo de lo que el user va haciendo
  // EN MI APP ESTO VA A IR EN EL BOTÓN DEL DRAWER

  // const { addProduct} = useContext(CartContext)
  // const addProductToCart = (product) => {
  //     addProduct([... cart, product])
  // navigate("/cart")
  // }

  // esta función navigate también te permite ir a la ruta previa en la que estabas
  // esto se hace ejecutando el navigate(-1)

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 15, md: 20 }}
      >
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <IconButton
              onClick={() => navigate(-1)}
              colorScheme="blue"
              icon={<AiOutlineArrowLeft size={25} />}
            />
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              Automatic Watch
            </Heading>
            <Flex direction={'column'} mt={3}>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
              >
                Price
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}
              >
                $350.00
              </Text>
            </Flex>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'2'}
              >
                Categories
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>
          <Flex justifyContent={'center'}>
            <Button
              borderRadius="10"
              w="50%"
              size={'lg'}
              py={'7'}
              bg="blue.500"
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              // onClick={addProductToCart(product)}
            >
              <span style={{ marginRight: '10px' }}>Add to cart</span>
              <IoCart size={25} />
            </Button>
          </Flex>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}
