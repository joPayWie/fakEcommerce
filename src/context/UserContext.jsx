import { contextProvider, useEffect } from 'react'

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

// SPINNER PARA CHEQUEAR QUE HAYA USUARIO

// todo lo del context de usuario
// useEffect(
//   () =>
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
// isLoading(false)
//         const uid = user.uid
//         settear el user
//

//       } else {
// isLoading(false)
//       }
//     }),
//   []
// )
