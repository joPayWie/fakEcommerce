import { useEffect, useState } from 'react'

import { SimpleGrid } from '@chakra-ui/react'

import { ProductCard } from '../components/ProductCard'
import { SkeletonCard } from '../components/SkeletonCard'

import { getProducts } from '../services/products'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [skeleton, setSkeleton] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const products = await getProducts()
      setSkeleton(false)
      setProducts(products)
    }
    getData()
  }, [])

  // const addToCart = () => {}

  return (
    <SimpleGrid
      h="100%"
      columns={{ base: '1', md: '3', xl: '4' }}
      justifyContent="center"
      bgColor="#dadefb"
    >
      {skeleton && (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  )
}
