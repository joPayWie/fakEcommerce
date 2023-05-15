import { useState } from 'react'

import { Flex, Button, Input } from '@chakra-ui/react'

import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

import styles from './Login.module.css'
import google from '../../assets/google.jpg'

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
    <Flex
      className={styles.glassForm}
      justify="center"
      align="center"
      direction="column"
      w={{ base: '90%', md: '40%' }}
      h={{ base: '45%', md: '50%' }}
      py={{ base: '10%', md: '15%' }}
    >
      <form onSubmit={onSubmit} className={styles.authForm}>
        <div className={styles.googleBtn}>
          <div className={styles.googleIconWrapper}>
            <img className={styles.googleIcon} src={google} />
          </div>
          <p className={styles.googleBtnText}>
            <b>Sign in with Google</b>
          </p>
        </div>
        <div>
          <label>Email</label>
          <Input type="email" name="userEmail" bgColor="white" />
        </div>
        <div>
          <label>Password</label>
          <Input type="password" name="userPassword" bgColor="white" />
        </div>
        <Button type="submit" colorScheme="green">
          Login
        </Button>
        <div>
          <label style={{ fontWeight: '400' }}>
            Don't have an account yet?
          </label>
          <Button
            bgColor="transparent"
            ml="2px"
            _hover={{ textDecoration: 'underline' }}
            _active={{ padding: 'none' }}
          >
            Register
          </Button>
        </div>
      </form>
    </Flex>
  )
}
