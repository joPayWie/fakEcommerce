import { useState } from 'react'

import { BsSearch } from 'react-icons/bs'
import { Button, Input, Select } from '@chakra-ui/react'

export const Filters = ({ products, handleProducts, originalProducts }) => {
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
    return handleProducts(productsToFilter)
  }

  return (
    <form
      style={{
        display: 'flex',
        padding: '10px',
        gap: '10px',
        alignItems: 'center',
        backgroundColor: '#E7F5F8',
      }}
      onSubmit={filterProducts}
    >
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
      <Button type="submit" colorScheme="green" onClick={filterProducts}>
        <BsSearch size={100} />
      </Button>
    </form>
  )
}
