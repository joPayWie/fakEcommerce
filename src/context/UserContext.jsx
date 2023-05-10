import { useEffect } from 'react'

import { getAuth, onAuthStateChanged } from 'firebase/auth'

// todo lo del context de usuario
// useEffect(
//   () =>
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         const uid = user.uid
//         // ...
//       } else {
//         // User is signed out
//         // ...
//       }
//     }),
//   []
// )
