import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { to: '/marketplace', icon: 'shopping_cart', label: 'Marketplace' },
  { to: '/active-numbers', icon: 'phonelink_setup', label: 'Active Numbers' },
  { to: '/history', icon: 'history', label: 'History' },
  { to: '/wallet', icon: 'account_balance_wallet', label: 'Wallet' },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] bg-surface-container border-r border-outline-variant flex flex-col py-6 z-50">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-9 h-9 rounded bg-primary flex items-center justify-center">
          <span className="material-symbols-outlined icon-filled text-on-primary text-xl">
            bolt
          </span>
        </div>
        <span className="font-headline-sm text-headline-sm font-black text-primary tracking-tighter">
          QUIN-SMS
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
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
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-on-surface-variant opacity-80 hover:opacity-100 hover:bg-surface-container-highest transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">code</span>
          <span className="text-[13px]">API Documentation</span>
        </NavLink>
      </nav>

      <div className="px-6 mt-4 space-y-3">
        <NavLink
          to="/settings"
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
  )
}
