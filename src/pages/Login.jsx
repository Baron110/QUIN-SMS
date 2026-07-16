import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext.jsx'
import { auth, db } from '../lib/firebase.js'

function friendlyAuthError(code) {
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Incorrect email or password.'
    case 'auth/too-many-requests':
      return 'Too many attempts. Please wait a moment and try again.'
    default:
      return 'Something went wrong signing you in. Please try again.'
  }
}

export default function Login() {
  const navigate = useNavigate()
  const { logIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await logIn(email, password)
      navigate('/dashboard')
    } catch (err) {
      setError(friendlyAuthError(err.code))
      setSubmitting(false)
    }
  }

  async function handleGoogleLogin() {
    setError('')
    setSubmitting(true)
    try {
      const provider = new GoogleAuthProvider()
      const credential = await signInWithPopup(auth, provider)

      const userRef = doc(db, 'users', credential.user.uid)
      const existing = await getDoc(userRef)
      if (!existing.exists()) {
        await setDoc(userRef, {
          email: credential.user.email,
          balanceUsd: 0,
          createdAt: serverTimestamp(),
        })
      }

      navigate('/dashboard')
    } catch (err) {
      setError('Google sign-in failed. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-container-margin-mobile bg-background text-on-surface relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative w-full max-w-[440px] z-10">
        <div className="flex items-center justify-center mb-8 gap-2">
          <div className="w-8 h-8 bg-primary flex items-center justify-center rounded">
            <span className="material-symbols-outlined icon-filled text-on-primary text-[20px]">bolt</span>
          </div>
          <span className="font-headline-sm text-headline-sm text-on-surface tracking-tighter">QUIN-SMS</span>
        </div>

        <main className="bg-surface-container border border-outline-variant rounded-xl p-8 shadow-2xl">
          <header className="text-center mb-8">
            <h1 className="font-headline-md text-headline-md text-on-surface mb-2">Welcome back</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Sign in to continue to your dashboard.</p>
          </header>

          {error && (
            <div className="mb-6 px-4 py-3 rounded-lg bg-error-container/10 border border-error/20 text-error text-body-sm flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] mt-0.5">error</span>
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full h-12 px-4 bg-background border border-outline-variant rounded text-on-surface font-body-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-on-surface-variant/40"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="password">
                  Password
                </label>
                <a href="#" className="text-[11px] text-primary hover:underline underline-offset-4">Forgot password?</a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-12 px-4 bg-background border border-outline-variant rounded text-on-surface font-data-mono focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full h-12 bg-primary text-on-primary font-headline-sm rounded transition-all hover:bg-primary-container active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant" />
            </div>
            <div className="relative flex justify-center text-label-caps uppercase">
              <span className="bg-surface-container px-4 text-on-surface-variant font-medium">Or continue with</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 h-11 border border-outline-variant rounded bg-background hover:bg-surface-container-high transition-colors disabled:opacity-60"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-2.008 4.252-1.1 1.1-2.6 1.84-5.832 1.84-5.22 0-9.432-4.232-9.432-9.432s4.212-9.432 9.432-9.432c2.832 0 4.956 1.116 6.48 2.556l2.32-2.32C18.984 1.116 16.188 0 12.48 0 5.58 0 0 5.58 0 12.48s5.58 12.48 12.48 12.48c3.744 0 6.564-1.224 8.748-3.504 2.244-2.244 2.94-5.388 2.94-7.908 0-.768-.072-1.488-.192-2.136H12.48z" />
            </svg>
            <span className="font-body-sm text-on-surface">Continue with Google</span>
          </button>
        </main>

        <footer className="mt-8 text-center">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Don't have an account?{' '}
            <Link className="text-primary font-semibold hover:underline underline-offset-4 ml-1" to="/signup">Create one</Link>
          </p>
        </footer>
      </div>
    </div>
  )
}
