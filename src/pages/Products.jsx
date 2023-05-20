import { useEffect, useState } from 'react'

import { SimpleGrid, Flex } from '@chakra-ui/react'

import { ProductCard } from '../components/ProductCard'
import { SkeletonCard } from '../components/SkeletonCard'
import { Filters } from '../components/Filters'

import { getProducts } from '../services/products'
import { set } from 'react-hook-form'

export const Products = () => {
  const [originalProducts, setOriginalProducts] = useState([])
  const [products, setProducts] = useState([])
  const [skeleton, setSkeleton] = useState(true)
  // const [areThereFilters, setAreThereFilters] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const fetchedProducts = await getProducts()
      setSkeleton(false)
      setOriginalProducts(fetchedProducts)
      setProducts(fetchedProducts)
    }
    getData()
  }, [])

  const handleProducts = (filteredProducts) => {
    setProducts(filteredProducts)
  }

  // const addToCart = () => {}

  return (
    <Flex h="100%" w="100%" direction="column">
      <Filters
        products={products}
        handleProducts={handleProducts}
        originalProducts={originalProducts}
      />
      <SimpleGrid
        h="100%"
        w="100%"
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
    </Flex>
  )
}
