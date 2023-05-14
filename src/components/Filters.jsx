import { useState } from 'react'

import { Flex, Input, Select } from '@chakra-ui/react'

export const Filters = ({ products }) => {
  const [currentCategories, setCurrentCategories] = useState([])

  const getAllCategories = (products) => {
    for (const product of products) {
      for (const category of product.categories)
        if (!currentCategories.includes(category)) {
          setCurrentCategories([...currentCategories, category])
        }
    }
    return currentCategories
  }
  return (
    <Flex p={3} gap="10px" align="center" bgColor="#E7F5F8">
      <label style={{ fontWeight: 'bold' }}>Name</label>
      <Input placeholder="Search" bgColor="white" />
      <label style={{ fontWeight: 'bold' }}>Category</label>
      <Select placeholder="Select option" bgColor="white">
        {getAllCategories(products).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
      <label style={{ fontWeight: 'bold' }}>Max price</label>
      <Input type="number" placeholder="Up to..." bgColor="white" />
    </Flex>
  )
}
