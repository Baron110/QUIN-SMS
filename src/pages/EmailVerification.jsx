import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { auth } from '../lib/firebase.js'

const RESEND_COOLDOWN = 60

export default function EmailVerification() {
  const navigate = useNavigate()
  const { user, loading, logOut, resendVerificationEmail } = useAuth()
  const [checking, setChecking] = useState(false)
  const [resendState, setResendState] = useState('idle') // idle | sending | sent
  const [cooldown, setCooldown] = useState(0)
  const pollRef = useRef(null)

  const checkVerified = useCallback(async () => {
    if (!auth.currentUser) return
    setChecking(true)
    await auth.currentUser.reload()
    setChecking(false)
    if (auth.currentUser.emailVerified) {
      navigate('/dashboard')
    }
  }, [navigate])

  // Redirect away if there's no signed-in user, or straight to dashboard if already verified
  useEffect(() => {
    if (loading) return
    if (!user) {
      navigate('/signup')
      return
    }
    if (user.emailVerified) {
      navigate('/dashboard')
    }
  }, [loading, user, navigate])

  // Poll every 4s in case the person verifies in another tab and comes back
  useEffect(() => {
    pollRef.current = setInterval(checkVerified, 4000)
    return () => clearInterval(pollRef.current)
  }, [checkVerified])

  // Resend cooldown timer
  useEffect(() => {
    if (cooldown <= 0) return
    const t = setInterval(() => setCooldown((s) => Math.max(0, s - 1)), 1000)
    return () => clearInterval(t)
  }, [cooldown])

  async function handleResend() {
    setResendState('sending')
    try {
      await resendVerificationEmail()
      setResendState('sent')
      setCooldown(RESEND_COOLDOWN)
    } catch {
      setResendState('idle')
    }
  }

  async function handleUseDifferentEmail() {
    await logOut()
    navigate('/signup')
  }

  const minutes = Math.floor(cooldown / 60)
  const seconds = cooldown % 60

  return (
    <div
      className="flex items-center justify-center min-h-screen overflow-hidden text-on-surface"
      style={{ background: 'radial-gradient(circle at 50% -20%, #161618 0%, #0A0A0B 100%)' }}
    >
      <main className="relative z-10 w-full max-w-[440px] px-gutter">
        <div className="flex flex-col items-center mb-10">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(173,198,255,0.3)]">
            <span className="material-symbols-outlined icon-filled text-on-primary">mark_email_unread</span>
          </div>
          <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">QUIN-SMS</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Infrastructure for Secure Verification</p>
        </div>

        <div className="bg-surface-container hairline-border rounded-xl p-8 md:p-10 shadow-2xl text-center">
          <header className="mb-8">
            <h2 className="font-headline-sm text-headline-sm text-on-surface mb-2">Check your email</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              We sent a verification link to
              <br />
              <span className="text-on-surface font-data-mono">{user?.email}</span>
            </p>
          </header>

          <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">
            Click the link in that email, then come back here — this page updates automatically once you're verified.
          </p>

          <div className="space-y-4">
            <button
              type="button"
              onClick={checkVerified}
              disabled={checking}
              className="w-full h-12 bg-primary text-on-primary font-headline-sm rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {checking ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                  Checking...
                </>
              ) : (
                "I've verified, continue"
              )}
            </button>

            <div className="flex flex-col items-center gap-2 pt-2">
              {cooldown > 0 ? (
                <div className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  Resend available in{' '}
                  <span className="font-data-mono text-primary">
                    {minutes}:{seconds.toString().padStart(2, '0')}
                  </span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resendState === 'sending'}
                  className="font-label-caps text-label-caps text-primary hover:underline transition-all disabled:opacity-60"
                >
                  {resendState === 'sending' ? 'Sending...' : 'Resend verification email'}
                </button>
              )}
              {resendState === 'sent' && cooldown > 0 && (
                <p className="text-[11px] text-secondary">Sent — check your inbox (and spam folder).</p>
              )}
            </div>
          </div>
        </div>

        <footer className="mt-8 text-center">
          <button
            type="button"
            onClick={handleUseDifferentEmail}
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors inline-flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Use a different email
          </button>
        </footer>
      </main>
    </div>
  )
}
