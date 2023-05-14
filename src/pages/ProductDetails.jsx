import { useContext, useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
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

import { SkeletonCard } from '../components/SkeletonCard'
import { CartContext } from '../context/CartContext'
import { getOneProduct } from '../services/products'

export const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState({})
  const [productCategories, setProductCategories] = useState([])
  const [skeleton, setSkeleton] = useState(true)

  const param = useParams()

  useEffect(() => {
    const getData = async () => {
      const product = await getOneProduct(param.productId)
      setSkeleton(false)
      setSelectedProduct(product)
      setProductCategories(product.categories)
    }
    getData()
  }, [param])
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
    <>
      {skeleton ? (
        <SkeletonCard />
      ) : (
        <Container maxW={'7xl'}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 15, md: 20 }}
          >
            <Flex>
              <Image
                rounded={'md'}
                alt={selectedProduct.name}
                src={selectedProduct.image}
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
                  {selectedProduct.name}
                </Heading>
                <Flex direction={'column'} mt={3}>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color="blue.500"
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                  >
                    Price
                  </Text>
                  <Text color="gray.900" fontWeight={300} fontSize={'2xl'}>
                    ${selectedProduct.price}
                  </Text>
                </Flex>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={<StackDivider borderColor="gray.200" />}
              >
                <Stack spacing={{ base: 4, sm: 6 }}>
                  <Text color="gray.500" fontSize={'2xl'} fontWeight={'300'}>
                    {selectedProduct.description}
                  </Text>
                </Stack>
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color="blue.500"
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'2'}
                  >
                    Categories
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      {productCategories.map((category) => (
                        <ListItem key={category}>{category}</ListItem>
                      ))}
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
                  color="white"
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
      )}
    </>
  )
}
