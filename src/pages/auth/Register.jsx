import { useState } from 'react'

import {
  Flex,
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  Heading,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  InputGroup,
  IconButton,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineArrowLeft,
} from 'react-icons/ai'

import { auth } from '../../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { useUserContext } from '../../context/UserContext'

import styles from './Auth.module.css'

export const Register = () => {
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

  const createNewAccount = async (userValues) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userValues.email,
        userValues.password
      )
      const user = userCredential.user
      handleLogin({ email: user.email, uid: user.uid })
      {
        pagesUserHasNavigate < 2 ? navigate('/products') : navigate(-2)
      }
      setAuthError(false)
    } catch (error) {
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
      w={{ base: '90%', md: '40%' }}
      p="5%"
    >
      <form
        onSubmit={handleSubmit(createNewAccount)}
        className={styles.authForm}
      >
        <Heading>Welcome there!</Heading>
        <Text textAlign="center">
          Enter your email and password
          <Text fontWeight="400">(minimum 6 characters)</Text>
        </Text>
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
            <AlertTitle>Cannot register!</AlertTitle>
            <AlertDescription fontWeight="500">
              Invalid email or password.
            </AlertDescription>
          </Alert>
        )}
        <Button
          type="submit"
          isLoading={isSubmitting}
          colorScheme="green"
          isDisabled={!isDirty}
        >
          Register
        </Button>
        <Button as={Link} to="/login" colorScheme="blackAlpha" color="white">
          <AiOutlineArrowLeft />
          <Text ml={3}>Back</Text>
        </Button>
      </form>
    </Flex>
  )
}
