import { useEffect, useState } from 'react'

import { SimpleGrid } from '@chakra-ui/react'

import { ProductCard } from '../components/ProductCard'

import { getProducts } from '../services/products'

export const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const products = await getProducts()
      setProducts(products)
    }
    getData()
  }, [])

  // const addToCart = () => {}

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
