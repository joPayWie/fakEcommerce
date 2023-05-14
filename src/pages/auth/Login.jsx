import { useState } from 'react'

import { Flex } from '@chakra-ui/react'

import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const Login = () => {
  const [userValues, setUserValues] = useState({
    userEmail: '',
    userPassword: '',
  })

  const handleValues = (e) => {
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userValues.userEmail,
        userValues.createUserWithEmailAndPasswordassword
      )
      const user = userCredential.user
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
    }
  }
  return (
    <Flex bgColor="white">
      <form onSubmit={onSubmit}>
        <div>
          <input type="email" name="userEmail" />
        </div>
        <div>
          <input type="password" name="userPassword" />
        </div>
        <button type="submit">Login</button>
      </form>
    </Flex>
  )
}
