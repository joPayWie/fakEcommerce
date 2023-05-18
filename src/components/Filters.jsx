import { useState } from 'react'

import { Input, Select } from '@chakra-ui/react'

export const Filters = ({ products, handleProducts }) => {
  const [currentCategories, setCurrentCategories] = useState([])
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const getAllCategories = (products) => {
    for (const product of products) {
      for (const category of product.categories)
        if (!currentCategories.includes(category)) {
          setCurrentCategories([...currentCategories, category])
        }
    }
  }

  const filterByName = (productArr, nameSearched) => {
    productArr.filter((product) =>
      product.name.toLowerCase().includes(nameSearched.toLowerCase())
    )
  }

  const filterByCategory = (productArr, category) => {
    productArr.filter((product) => {
      return product.categories.includes(category)
    })
  }

  const filterByPrice = (productArr, price) => {
    productArr.filter((product) => {
      return product.price <= price
    })
  }

  const filterProducts = () => {
    let productsToFilter = products
    // productsToFilter = filterByName(products, name)
    // productsToFilter = filterByCategory(products, category)
    productsToFilter = filterByPrice(products, maxPrice)
    handleProducts(productsToFilter)
  }

  const prueba = (e) => {
    e.preventDefault()
    console.log('hola')
  }

  return (
    <form
      // onSubmit={prueba}
      style={{
        display: 'flex',
        padding: '10px',
        gap: '10px',
        alignItems: 'center',
        backgroundColor: '#E7F5F8',
      }}
    >
      <label style={{ fontWeight: 'bold' }}>Name</label>
      <Input
        placeholder="Search"
        bgColor="white"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
      <label style={{ fontWeight: 'bold' }}>Max price</label>
      <Input
        type="number"
        placeholder="Up to..."
        bgColor="white"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={filterProducts}>Search</button>
    </form>
  )
}
