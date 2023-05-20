import { useState } from 'react'

import { BsSearchHeart } from 'react-icons/bs'
import { Input, Select } from '@chakra-ui/react'
import { DB } from '../firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const Filters = ({ products, handleProducts }) => {
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
  // useDebounce

  // const getProductsWithCategories = async () => {
  //   const q = query(
  //     collection(DB, 'products'),
  //     where('categories', 'array-contains', { category })
  //   )
  //   const querySnapshot = await getDocs(q)
  //   return querySnapshot
  // }

  const filterByName = (productArr, nameSearched) => {
    return productArr.filter((product) =>
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

  const filterProducts = (e) => {
    e.preventDefault()
    let productsToFilter = products
    if (name !== '') {
      productsToFilter = filterByName(products, name)
      console.log(productsToFilter)
    }
    if (category !== '') {
      productsToFilter = filterByCategory(products, category)
      console.log(productsToFilter)
    }
    if (maxPrice !== '') {
      productsToFilter = filterByPrice(products, maxPrice)
      console.log(productsToFilter)
    }
    console.log(productsToFilter)
    return productsToFilter
  }

  return (
    <form
      // onSubmit={filterProducts}
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
      <button onClick={filterProducts}>
        <BsSearchHeart />
      </button>
    </form>
  )
}
