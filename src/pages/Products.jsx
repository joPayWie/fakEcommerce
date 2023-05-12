import { SimpleGrid } from '@chakra-ui/react'

import { ProductCard } from '../components/ProductCard'

import { products } from '../data/products'
import { getProducts } from '../services/products'

export const Products = () => {
  // useEffect(() => const getData = async () => { await getProducts() },[])

  const addToCart = () => {}

  return (
    <SimpleGrid
      columns={{ base: '1', md: '3', xl: '4' }}
      justifyContent="center"
      bgColor="#dadefb"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  )
}
