import { useState } from 'react'

import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, Select } from '@chakra-ui/react'

import styles from './Filters.module.css'

export const Filters = ({
  products,
  handleProducts,
  originalProducts,
  setNoProductsToShow,
}) => {
  const [currentCategories, setCurrentCategories] = useState([])
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const getAllCategories = (allProducts) => {
    for (const product of allProducts) {
      for (const category of product.categories)
        if (!currentCategories.includes(category)) {
          setCurrentCategories([...currentCategories, category])
        }
    }
  }

  getAllCategories(products)

  const filterProducts = (e) => {
    e.preventDefault()
    let productsToFilter = originalProducts
    if (name !== '') {
      productsToFilter = productsToFilter.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      )
    }
    if (category !== '') {
      productsToFilter = productsToFilter.filter((product) => {
        return product.categories.includes(category)
      })
    }
    if (maxPrice !== '') {
      productsToFilter = productsToFilter.filter((product) => {
        return product.price <= maxPrice
      })
    }
    if (productsToFilter.length === 0) {
      setNoProductsToShow(true)
    } else {
      setNoProductsToShow(false)
    }
    return handleProducts(productsToFilter)
  }

  return (
    <form className={styles.filterForm} onSubmit={filterProducts}>
      <label style={{ fontWeight: 'bold' }}>Name</label>
      <Input
        placeholder="Search"
        bgColor="white"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label style={{ fontWeight: 'bold' }}>Max price</label>
      <Input
        type="number"
        placeholder="Up to..."
        bgColor="white"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <label style={{ fontWeight: 'bold' }}>Category</label>
      <Select
        placeholder="All"
        bgColor="white"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {currentCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
      <Button
        type="submit"
        colorScheme="green"
        w={{ base: '50%', md: 'auto' }}
        onClick={filterProducts}
      >
        <SearchIcon size={50} />
      </Button>
    </form>
  )
}
