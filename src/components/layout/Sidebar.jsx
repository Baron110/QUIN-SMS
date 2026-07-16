import { NavLink } from 'react-router-dom'
import Logo from '../Logo.jsx'

const navItems = [
  { to: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { to: '/marketplace', icon: 'shopping_cart', label: 'Marketplace' },
  { to: '/active-numbers', icon: 'phonelink_setup', label: 'Active Numbers' },
  { to: '/history', icon: 'history', label: 'History' },
  { to: '/wallet', icon: 'account_balance_wallet', label: 'Wallet' },
]

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-full w-[280px] bg-surface-container border-r border-outline-variant flex flex-col py-6 z-50 transform transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="px-6 mb-8 flex items-center justify-between">
          <Logo />
          <button onClick={onClose} className="lg:hidden text-on-surface-variant hover:text-on-surface p-1">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'text-on-surface font-semibold border-l-2 border-primary bg-surface-container-high'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest'
                }`
              }
            >
              <span className="material-symbols-outlined text-xl">{item.icon}</span>
              <span className="font-body-sm text-body-sm">{item.label}</span>
            </NavLink>
          ))}

          <div className="pt-4 pb-2 px-4">
            <div className="h-px bg-outline-variant w-full" />
          </div>

          <NavLink
            to="/api"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-on-surface-variant opacity-80 hover:opacity-100 hover:bg-surface-container-highest transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">code</span>
            <span className="text-[13px]">API Documentation</span>
          </NavLink>
        </nav>

        <div className="px-6 mt-4 space-y-3 shrink-0">
          <NavLink
            to="/settings"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? 'text-on-surface font-semibold bg-surface-container-high'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`
            }
          >
            <span className="material-symbols-outlined text-lg">settings</span>
            <span className="font-body-sm text-body-sm">Settings</span>
          </NavLink>
          <button className="w-full py-2.5 px-4 bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors flex items-center justify-center gap-2 border border-outline-variant rounded">
            <span className="material-symbols-outlined text-sm">support_agent</span>
            Get Support
          </button>
        </div>
      </aside>
    </>
  )
}