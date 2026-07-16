import { useState } from 'react'
import AppShell from '../components/layout/AppShell.jsx'

const tabs = [
  { id: 'profile', label: 'Profile', icon: 'person' },
  { id: 'security', label: 'Security', icon: 'shield' },
  { id: 'preferences', label: 'Preferences', icon: 'tune' },
  { id: 'billing', label: 'Billing', icon: 'credit_card' },
]

function Toggle({ defaultChecked }) {
  const [checked, setChecked] = useState(defaultChecked)
  return (
    <label className="relative inline-block w-10 h-6 cursor-pointer">
      <input type="checkbox" checked={checked} onChange={() => setChecked((v) => !v)} className="toggle-checkbox hidden" />
      <span className="toggle-label absolute inset-0 bg-surface-container-highest rounded-full transition-colors border border-outline-variant" />
    </label>
  )
}

export default function Settings() {
  const [tab, setTab] = useState('profile')

  return (
    <AppShell searchPlaceholder="Search settings...">
      <div className="flex gap-8">
        <nav className="w-64 flex flex-col gap-1 shrink-0">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all group text-left ${
                tab === t.id
                  ? 'bg-primary-container text-on-primary-container font-semibold'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="material-symbols-outlined">{t.icon}</span>
                {t.label}
              </span>
              <span className="material-symbols-outlined text-sm opacity-50 group-hover:opacity-100">chevron_right</span>
            </button>
          ))}
        </nav>

        <div className="flex-1 max-w-3xl space-y-12">
          {tab === 'profile' && (
            <section className="space-y-6">
              <div className="border-b border-outline-variant pb-4">
                <h3 className="font-headline-md text-headline-md text-on-surface">Profile Settings</h3>
                <p className="text-on-surface-variant text-body-sm mt-1">Manage your public identity and contact information.</p>
              </div>
              <div className="bg-surface-container border border-outline-variant rounded-xl p-8 space-y-8">
                <div className="flex items-center gap-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-primary/20 border border-outline-variant flex items-center justify-center text-primary text-3xl font-bold">
                      B
                    </div>
                    <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-on-primary rounded-lg flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-body-base text-body-base font-semibold text-on-surface">Profile Picture</h4>
                    <p className="text-on-surface-variant text-body-sm">JPG, GIF or PNG. Max size of 2MB.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant block uppercase">Full Name</label>
                    <input
                      defaultValue="Baron"
                      className="w-full bg-background border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant block uppercase">Email Address</label>
                    <input
                      defaultValue="baron@quin-sms.com"
                      className="w-full bg-background border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-4">
                  <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold transition-transform active:scale-95">
                    Save Changes
                  </button>
                </div>
              </div>
            </section>
          )}

          {tab === 'security' && (
            <section className="space-y-6">
              <div className="border-b border-outline-variant pb-4">
                <h3 className="font-headline-md text-headline-md text-on-surface">Security & Privacy</h3>
                <p className="text-on-surface-variant text-body-sm mt-1">Protect your account with advanced verification methods.</p>
              </div>

              <div className="bg-surface-container border border-outline-variant rounded-xl p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">enhanced_encryption</span>
                  </div>
                  <div>
                    <h4 className="font-body-base text-body-base font-semibold text-on-surface">Two-Factor Authentication</h4>
                    <p className="text-on-surface-variant text-body-sm">Secure your account with TOTP (Google Authenticator).</p>
                  </div>
                </div>
                <Toggle defaultChecked />
              </div>

              <div className="bg-surface-container border border-outline-variant rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">key</span>
                  </div>
                  <h4 className="font-body-base text-body-base font-semibold text-on-surface">Password</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="password" placeholder="Current Password" className="bg-background border border-outline-variant rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary outline-none" />
                  <input type="password" placeholder="New Password" className="bg-background border border-outline-variant rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary outline-none" />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-on-surface-variant text-[11px] uppercase tracking-wider font-bold italic">Last changed 4 months ago</p>
                  <button className="text-primary font-bold text-sm hover:underline">Update Password</button>
                </div>
              </div>

              <div className="bg-surface-container border border-outline-variant rounded-xl overflow-hidden">
                <div className="p-6 border-b border-outline-variant">
                  <h4 className="font-body-base text-body-base font-semibold text-on-surface">Active Sessions</h4>
                  <p className="text-on-surface-variant text-body-sm">Devices currently logged into your account.</p>
                </div>
                <div className="divide-y divide-outline-variant">
                  {[
                    { device: 'desktop_windows', label: 'Windows PC • Port Harcourt, NG', status: 'Active now', active: true },
                    { device: 'smartphone', label: 'iPhone 15 Pro • Port Harcourt, NG', status: 'Last active: 2 hours ago', active: false },
                  ].map((s) => (
                    <div key={s.label} className="p-4 flex items-center justify-between hover:bg-surface-container-high transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-on-surface-variant">{s.device}</span>
                        <div>
                          <p className="font-body-sm text-body-sm text-on-surface font-semibold">{s.label}</p>
                          <p className={`text-[12px] flex items-center gap-1 ${s.active ? 'text-secondary' : 'text-on-surface-variant'}`}>
                            {s.active && <span className="w-1.5 h-1.5 bg-secondary rounded-full" />}
                            {s.status}
                          </p>
                        </div>
                      </div>
                      <button className="text-on-surface-variant hover:text-error transition-colors px-3 py-1 rounded border border-outline-variant text-xs font-bold uppercase">
                        Terminate
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {tab === 'preferences' && (
            <section className="space-y-6">
              <div className="border-b border-outline-variant pb-4">
                <h3 className="font-headline-md text-headline-md text-on-surface">Preferences</h3>
                <p className="text-on-surface-variant text-body-sm mt-1">Customize your platform experience and data visibility.</p>
              </div>
              <div className="bg-surface-container border border-outline-variant rounded-xl divide-y divide-outline-variant">
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-body-base text-body-base font-semibold text-on-surface">Email Notifications</h4>
                    <p className="text-on-surface-variant text-body-sm">Receive account alerts and weekly usage reports.</p>
                  </div>
                  <Toggle defaultChecked />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-body-base text-body-base font-semibold text-on-surface">API Key Visibility</h4>
                    <p className="text-on-surface-variant text-body-sm">Allow partial key masking in the dashboard interface.</p>
                  </div>
                  <Toggle />
                </div>
              </div>

              <div className="bg-error-container/10 border border-error/20 rounded-xl p-6 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-error-container/20 flex items-center justify-center text-error">
                    <span className="material-symbols-outlined">delete_forever</span>
                  </div>
                  <div>
                    <h4 className="font-body-base text-body-base font-semibold text-error">Deactivate Account</h4>
                    <p className="text-on-surface-variant text-body-sm">Permanently remove all data and active subscriptions.</p>
                  </div>
                </div>
                <button className="bg-error/10 hover:bg-error/20 text-error px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                  Deactivate
                </button>
              </div>
            </section>
          )}

          {tab === 'billing' && (
            <section className="space-y-6">
              <div className="border-b border-outline-variant pb-4">
                <h3 className="font-headline-md text-headline-md text-on-surface">Billing</h3>
                <p className="text-on-surface-variant text-body-sm mt-1">Manage payment methods and view invoices.</p>
              </div>
              <div className="bg-surface-container border border-outline-variant rounded-xl p-8 text-center text-on-surface-variant">
                No saved payment methods yet.
              </div>
            </section>
          )}
        </div>
      </div>
    </AppShell>
  )
}
