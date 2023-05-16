// acá irían las funciones que van dentro del onSubmit  del login, TRAER ACÁ TODO LO DE FIREBASE
// lo del register puede ir en el mismo Register.jsx o sino dentro del context de usuario

// mantener el user logged

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

const auth = getAuth()
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid
    // ...
  } else {
    // User is signed out
    // ...
  }
})
