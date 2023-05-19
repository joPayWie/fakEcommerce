import { Outlet, Navigate } from 'react-router-dom'

import { useUserContext } from '../context/UserContext'

export const Orders = () => {
  const { loggedUser } = useUserContext()

  if (!loggedUser) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
