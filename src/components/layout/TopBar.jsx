import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, onSnapshot } from 'firebase/firestore'
import { useAuth } from '../../context/AuthContext.jsx'
import { db } from '../../lib/firebase.js'

export default function TopBar({ searchPlaceholder = 'Search...', onMenuClick }) {
  const navigate = useNavigate()
  const { user, logOut } = useAuth()
  const [balance, setBalance] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!user) return
    const unsub = onSnapshot(doc(db, 'users', user.uid), (snap) => {
      setBalance(snap.exists() ? snap.data().balanceUsd ?? 0 : 0)
    })
    return unsub
  }, [user])

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  async function handleLogOut() {
    await logOut()
    navigate('/login')
  }

  const initial = (user?.email || '?').charAt(0).toUpperCase()
  const displayBalance = balance === null ? '—' : balance.toFixed(2)

  return (
    <header className="fixed top-0 left-0 lg:left-[280px] right-0 h-16 bg-background/80 backdrop-blur-md border-b border-outline-variant z-30 flex items-center justify-between px-3 sm:px-gutter gap-2">
      <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
        <button onClick={onMenuClick} className="lg:hidden shrink-0 p-2 text-on-surface-variant hover:text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>

        <div className="relative w-full max-w-xl hidden sm:block group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-2 pl-10 pr-4 text-body-sm font-data-mono focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded border border-outline-variant bg-surface-container-high text-[10px] text-outline">
              CMD
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded border border-outline-variant bg-surface-container-high text-[10px] text-outline">
              K
            </kbd>
          </div>
        </div>

        <button className="sm:hidden shrink-0 p-2 text-on-surface-variant hover:text-on-surface">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-gutter shrink-0">
        <div className="flex flex-col items-end">
          <span className="font-data-mono text-xs sm:text-data-mono text-primary font-bold">${displayBalance}</span>
          <button
            onClick={() => navigate('/wallet')}
            className="text-[9px] sm:text-[10px] text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-tighter font-bold whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[11px] sm:text-[12px]">add_circle</span>
            <span className="hidden xs:inline">Add Funds</span>
          </button>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 border-l border-outline-variant pl-2 sm:pl-gutter">
          <button className="hidden sm:inline-flex p-2 text-on-surface-variant hover:text-on-surface transition-all active:scale-90">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button
            onClick={() => navigate('/settings')}
            className="hidden sm:inline-flex p-2 text-on-surface-variant hover:text-on-surface transition-all active:scale-90"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>

          <div className="relative ml-0.5 sm:ml-1" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold cursor-pointer hover:bg-primary/30 transition-colors"
            >
              {initial}
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-10 w-56 max-w-[calc(100vw-24px)] bg-surface-container border border-outline-variant rounded-lg shadow-2xl overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-outline-variant">
                  <p className="text-body-sm text-on-surface font-medium truncate">{user?.email}</p>
                </div>
                <button
                  onClick={() => {
                    setMenuOpen(false)
                    navigate('/settings')
                  }}
                  className="w-full text-left px-4 py-2.5 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">person</span>
                  Account settings
                </button>
                <button
                  onClick={handleLogOut}
                  className="w-full text-left px-4 py-2.5 text-body-sm text-error hover:bg-error-container/10 transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">logout</span>
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}