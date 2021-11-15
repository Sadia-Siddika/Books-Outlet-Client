import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, getIdToken, updateProfile } from 'firebase/auth';
import { useEffect, useState } from "react";
import initializeAuthentication from '../../src/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

  const [user, setUser] = useState({})
  const [admin, setAdmin] = useState(false)
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        getIdToken(user)
          .then(idToken => {
            setToken(idToken);
          })
      }
      else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unsubscribe()
  }, [auth]);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)

  }

  const registerWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(() => {
        const newUser = { ...user, displayName: name }
        setUser(newUser)
      })
      .catch((error) => {
      });
  }

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({})
    })
      .catch((error) => {
      });
  }

  // verify admin
  useEffect(() => {
    fetch(`https://hidden-basin-07858.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email])

  return {
    user,
    admin,
    token,
    setUser,
    signInWithGoogle,
    registerWithEmailPassword,
    loginWithEmailAndPassword,
    isLoading,
    setIsLoading,
    logOut,
    updateName

  }
}
export default useFirebase;