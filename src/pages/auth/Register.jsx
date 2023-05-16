import {
  Flex,
  FormControl,
  Input,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { auth } from '../../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { GoogleBtn } from './components/GoogleBtn'

import styles from './Auth.module.css'

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm()

  const navigate = useNavigate()

  const createNewAccount = async (userValues) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userValues.email,
        userValues.password
      )
      const user = userCredential.user
      navigate('/')
      // acá vendría la función de settear el user (traída de UseContext)
    } catch (error) {
      // mostrarle error al user!!
      const errorCode = error.code
      console.log(errorCode)
      const errorMessage = error.message
      console.log(errorMessage)
    }
  }

  return (
    <Flex
      className={styles.glassForm}
      justify="center"
      align="center"
      direction="column"
      minH="fit-content"
      w={{ base: '90%', md: '40%' }}
      p="5%"
    >
      <form
        onSubmit={handleSubmit(createNewAccount)}
        className={styles.authForm}
      >
        <GoogleBtn navigate={navigate} />
        <FormControl isInvalid={errors.email}>
          <label>Email</label>
          <Input
            bgColor="white"
            {...register('email', {
              required: 'Please complete this field',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Please enter a valid email',
              },
            })}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <div>
          <FormControl isInvalid={errors.password}>
            <label>Password</label>
            <Input
              bgColor="white"
              type="password"
              {...register('password', {
                required: 'Please complete this field',
                minLength: {
                  value: 6,
                  message: 'Please enter a password with 6 characters',
                },
              })}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
        </div>
        <Button
          type="submit"
          isLoading={isSubmitting}
          colorScheme="green"
          isDisabled={!isDirty}
        >
          Register
        </Button>
      </form>
    </Flex>
  )
}
