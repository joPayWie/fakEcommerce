import { collection, getDocs } from 'firebase/firestore'
import { DB } from '../firebase/config'

export const getProducts = async () => {
  const productsData = await getDocs(collection(DB, 'products'))

  let products = []

  productsData.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`)
    products.push({
      ...doc.data(),
      id: doc.id,
    })
  })
}
