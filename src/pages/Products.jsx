import { SimpleGrid } from '@chakra-ui/react'

import { ProductCard } from '../components/ProductCard'

import { products } from '../data/products'

export const Products = () => {
  return (
    <SimpleGrid
      columns={{ base: '1', md: '3', xl: '4' }}
      justifyContent="center"
      bgColor="#f6f7fe"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  )
}
