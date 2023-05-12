import { useState } from 'react'

import { auth } from '../../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const Register = () => {
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
      const userCredential = await createUserWithEmailAndPassword(
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
    <form onSubmit={onSubmit}>
      <div>
        <input type="email" name="userEmail" onChange={handleValues} />
      </div>
      <div>
        <input type="password" name="userPassword" onChange={handleValues} />
      </div>
      <button type="submit">Register</button>
    </form>
  )
}
