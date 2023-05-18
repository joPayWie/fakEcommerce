import { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Spinner } from '@chakra-ui/react'

import { auth } from '../../../firebase/config'

import styles from './GoogleBtn.module.css'

import google from '../../../assets/google.jpg'

const provider = new GoogleAuthProvider()

export const GoogleBtn = ({ navigate }) => {
  const [isLoading, setIsLoading] = useState(false)

  const loginWithGoogle = () => {
    setIsLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        setIsLoading(false)
        const user = result.user
        // acá vendría el setter para el user context
        navigate(-1)
      })
      .catch((error) => {
        setIsLoading(false)
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
      })
  }

  return (
    <div onClick={loginWithGoogle} className={styles.googleBtn}>
      <div className={styles.googleIconWrapper}>
        <img className={styles.googleIcon} src={google} />
      </div>
      {isLoading ? (
        <Spinner className={styles.googleSpinner} />
      ) : (
        <p className={styles.googleBtnText}>
          <b>Sign in with Google</b>
        </p>
      )}
    </div>
  )
}
