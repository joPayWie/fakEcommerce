import { createContext, useEffect, useState, useContext } from 'react'

import { onAuthStateChanged, signOut } from 'firebase/auth'

import { auth } from '../firebase/config'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoading(false)
          setLoggedUser({
            email: user.email,
            uid: user.uid,
          })
        } else {
          setIsLoading(false)
        }
      }),
    []
  )

  const handleLogin = (user) => {
    setLoggedUser(user)
  }

  const handleLogout = () => {
    signOut(auth)
    setLoggedUser(null)
  }

  return (
    <UserContext.Provider
      value={{ handleLogin, handleLogout, loggedUser, isLoading }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
