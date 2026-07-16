import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AlertCircle, Eye, EyeOff, Loader2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import Logo from '../components/Logo.jsx'

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
      navigate('/dashboard')
    } catch (err) {
      setError(friendlyAuthError(err.code))
      setSubmitting(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10 bg-background text-on-surface">
      <div className="w-full max-w-[420px]">
        <div className="flex items-center justify-center mb-8">
          <Logo />
        </div>

        <main className="bg-surface-container border border-outline-variant rounded-2xl p-6 sm:p-8">
          <header className="mb-7">
            <h1 className="text-2xl font-bold text-on-surface mb-1.5">Create your account</h1>
            <p className="text-sm text-on-surface-variant">Join thousands of users getting instant codes every day.</p>
          </header>

          {error && (
            <div className="mb-5 px-4 py-3 rounded-lg bg-error-container/10 border border-error/20 text-error text-sm flex items-start gap-2">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface uppercase tracking-wide" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full h-12 px-4 bg-background border border-outline-variant rounded-xl text-on-surface text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-on-surface-variant/40"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface uppercase tracking-wide" htmlFor="password">
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
                  className="w-full h-12 px-4 pr-12 bg-background border border-outline-variant rounded-xl text-on-surface text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-xs text-on-surface-variant">Minimum 6 characters.</p>
            </div>

            <div className="flex items-start gap-2.5">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded border-outline-variant bg-background text-primary focus:ring-primary/20 shrink-0"
              />
              <label className="text-sm text-on-surface-variant" htmlFor="terms">
                I agree to the{' '}
                <a className="text-primary hover:underline underline-offset-4" href="#">Terms of Service</a>{' '}
                and <a className="text-primary hover:underline underline-offset-4" href="#">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full h-12 bg-primary text-on-primary font-bold rounded-xl transition-all hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Creating account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-on-surface-variant">
            Already have an account?{' '}
            <Link className="text-primary font-semibold hover:underline underline-offset-4" to="/login">Sign In</Link>
          </p>
        </main>
      </div>
    </div>
  )
}