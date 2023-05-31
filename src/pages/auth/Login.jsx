import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  Flex,
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  InputGroup,
  IconButton,
} from '@chakra-ui/react'

import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

import { useUserContext } from '../../context/UserContext'

import { GoogleBtn } from './components/GoogleBtn'

import styles from './Auth.module.css'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm()

  const { handleLogin } = useUserContext()

  const navigate = useNavigate()

  const [authError, setAuthError] = useState(false)

  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  const pagesUserHasNavigate = window.history.state.idx

  const signIn = async (userValues) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userValues.email,
        userValues.password
      )
      const user = userCredential.user
      handleLogin({ email: user.email, uid: user.uid })
      {
        pagesUserHasNavigate === 0 ? navigate('/products') : navigate(-1)
      }
      setAuthError(false)
    } catch (e) {
      setAuthError(true)
    }
  }
  return (
    <Flex
      className={styles.glassForm}
      justify="center"
      align="center"
      direction="column"
      minH="fit-content"
      w={{ base: '90%', md: '50%', lg: '40%' }}
      p="5%"
    >
      <form onSubmit={handleSubmit(signIn)} className={styles.authForm}>
        <GoogleBtn navigate={navigate} handleLogin={handleLogin} />
        <FormControl isInvalid={errors.email}>
          <div>
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
          </div>
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <div>
          <FormControl isInvalid={errors.password}>
            <label>Password</label>
            <InputGroup alignItems="center">
              <Input
                bgColor="white"
                type={show ? 'text' : 'password'}
                {...register('password', {
                  required: 'Please complete this field',
                  minLength: {
                    value: 6,
                    message: 'Please enter a password with 6 characters',
                  },
                })}
              />
              <IconButton
                size="md"
                onClick={handleClick}
                icon={show ? <AiFillEyeInvisible /> : <AiFillEye />}
              />
            </InputGroup>
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
        </div>
        {authError && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Cannot sign in!</AlertTitle>
            <AlertDescription fontWeight="500">
              Wrong email or password.
            </AlertDescription>
          </Alert>
        )}
        <Button
          type="submit"
          isLoading={isSubmitting}
          colorScheme="green"
          isDisabled={!isDirty}
        >
          Login
        </Button>
        <div style={{ textAlign: 'center' }}>
          <label style={{ fontWeight: '400' }}>
            Don't have an account yet?
          </label>
          <Button
            as={Link}
            to="/register"
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
