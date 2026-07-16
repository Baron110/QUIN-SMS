import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '../lib/firebase.js'

const AuthContext = createContext(null)

async function ensureUserProfile(firebaseUser) {
  try {
    const userRef = doc(db, 'users', firebaseUser.uid)
    const snap = await getDoc(userRef)
    if (!snap.exists()) {
      await setDoc(userRef, {
        email: firebaseUser.email,
        balanceUsd: 0,
        createdAt: serverTimestamp(),
      })
    }
  } catch (err) {
    // Never let a profile-doc hiccup block sign-in/sign-up - the account
    // itself already exists in Firebase Auth at this point either way.
    console.error('Failed to ensure user profile doc', err)
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser)
      setLoading(false)
      if (firebaseUser) {
        ensureUserProfile(firebaseUser)
      }
    })
    return unsubscribe
  }, [])

  async function signUp(email, password) {
    const credential = await createUserWithEmailAndPassword(auth, email, password)
    return credential.user
  }

  async function logIn(email, password) {
    const credential = await signInWithEmailAndPassword(auth, email, password)
    return credential.user
  }

  function logOut() {
    return signOut(auth)
  }

  const value = { user, loading, signUp, logIn, logOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside an AuthProvider')
  return ctx
}