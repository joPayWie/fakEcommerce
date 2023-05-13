import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { DB } from '../firebase/config'

export const getProducts = async () => {
  const productsData = await getDocs(collection(DB, 'products'))

  let products = []

  productsData.forEach((doc) => {
    products.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  return products
}

export const getOneProduct = async (id) => {
  const ref = doc(DB, 'products', id)
  const productSnap = await getDoc(ref)
  if (productSnap.exists()) {
    const product = productSnap.data()
    return product
  }
}
