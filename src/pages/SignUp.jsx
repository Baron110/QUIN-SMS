import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext.jsx'
import { auth, db } from '../lib/firebase.js'

function friendlyAuthError(code) {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'An account already exists with that email.'
    case 'auth/invalid-email':
      return 'That email address looks invalid.'
    case 'auth/weak-password':
      return 'Password must be at least 6 characters.'
    default:
      return 'Something went wrong creating your account. Please try again.'
  }
}

export default function SignUp() {
  const navigate = useNavigate()
  const { signUp } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!agreed) {
      setError('You need to agree to the Terms of Service to continue.')
      return
    }

    setSubmitting(true)
    try {
      await signUp(email, password)
      navigate('/verify-email')
    } catch (err) {
      setError(friendlyAuthError(err.code))
      setSubmitting(false)
    }
  }

  async function handleGoogleSignUp() {
    setError('')
    setSubmitting(true)
    try {
      const provider = new GoogleAuthProvider()
      const credential = await signInWithPopup(auth, provider)

      // Create the Firestore profile only if this is a brand new user
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
      setError('Google sign-up failed. Please try again.')
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
            <h1 className="font-headline-md text-headline-md text-on-surface mb-2">Create your account</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Join thousands of users getting instant codes every day.</p>
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
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  minLength={6}
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
              <p className="font-label-caps text-[10px] text-on-surface-variant/60">
                Minimum 6 characters.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 mt-1 rounded border-outline-variant bg-background text-primary focus:ring-primary/20"
              />
              <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="terms">
                I agree to the{' '}
                <a className="text-primary hover:underline underline-offset-4" href="#">Terms of Service</a>{' '}
                and <a className="text-primary hover:underline underline-offset-4" href="#">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full h-12 bg-primary text-on-primary font-headline-sm rounded transition-all hover:bg-primary-container active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                  Creating account...
                </>
              ) : (
                'Create Account'
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

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={handleGoogleSignUp}
              disabled={submitting}
              className="flex items-center justify-center gap-2 h-11 border border-outline-variant rounded bg-background hover:bg-surface-container-high transition-colors disabled:opacity-60"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-2.008 4.252-1.1 1.1-2.6 1.84-5.832 1.84-5.22 0-9.432-4.232-9.432-9.432s4.212-9.432 9.432-9.432c2.832 0 4.956 1.116 6.48 2.556l2.32-2.32C18.984 1.116 16.188 0 12.48 0 5.58 0 0 5.58 0 12.48s5.58 12.48 12.48 12.48c3.744 0 6.564-1.224 8.748-3.504 2.244-2.244 2.94-5.388 2.94-7.908 0-.768-.072-1.488-.192-2.136H12.48z" />
              </svg>
              <span className="font-body-sm text-on-surface">Google</span>
            </button>
            <button
              type="button"
              disabled
              title="Coming soon"
              className="flex items-center justify-center gap-2 h-11 border border-outline-variant rounded bg-background opacity-40 cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 016 0c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span className="font-body-sm text-on-surface">GitHub</span>
            </button>
          </div>
        </main>

        <footer className="mt-8 text-center">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Already have an account?{' '}
            <Link className="text-primary font-semibold hover:underline underline-offset-4 ml-1" to="/login">Sign in instead</Link>
          </p>
        </footer>

        <div className="mt-12 flex justify-center items-center gap-8 opacity-40 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">verified_user</span>
            <span className="font-label-caps text-[10px] uppercase tracking-widest">Enterprise Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">encrypted</span>
            <span className="font-label-caps text-[10px] uppercase tracking-widest">AES-256 Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">bolt</span>
            <span className="font-label-caps text-[10px] uppercase tracking-widest">99.9% Uptime</span>
          </div>
        </div>
      </div>
    </div>
  )
}
