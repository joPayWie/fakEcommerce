import { useEffect, useState } from 'react'

import { SimpleGrid, Flex, Heading } from '@chakra-ui/react'

import { ProductCard } from '../components/ProductCard'
import { SkeletonCard } from '../components/SkeletonCard'
import { Filters } from '../components/Filters'

import { getProducts } from '../services/products'

export const Products = () => {
  const [originalProducts, setOriginalProducts] = useState([])
  const [products, setProducts] = useState([])
  const [skeleton, setSkeleton] = useState(true)

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

  return (
    <Flex h="100%" w="100%" direction="column">
      <Filters
        products={products}
        handleProducts={handleProducts}
        originalProducts={originalProducts}
      />

      {skeleton && (
        <SimpleGrid
          h="100%"
          w="100%"
          columns={{ base: '1', md: '3', xl: '4' }}
          justifyContent="center"
          bgColor="#dadefb"
        >
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </SimpleGrid>
      )}
      {products.length === 0 ? (
        <Flex h="100%" w="100%" justify="center">
          <Heading>
            No products founded. Please change the filters and try again.
          </Heading>
        </Flex>
      ) : (
        <SimpleGrid
          h="100%"
          w="100%"
          columns={{ base: '1', md: '3', xl: '4' }}
          justifyContent="center"
          bgColor="#dadefb"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      )}
    </Flex>
  )
}
