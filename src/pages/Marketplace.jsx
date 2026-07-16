import { useState } from 'react'
import AppShell from '../components/layout/AppShell.jsx'

const services = [
  { id: 'whatsapp', name: 'WhatsApp', tagline: 'Instant SMS Verification', price: '$0.14', color: 'bg-green-500', icon: 'chat_bubble' },
  { id: 'telegram', name: 'Telegram', tagline: 'Global Mobile Support', price: '$0.21', color: 'bg-[#26A5E4]', icon: 'send' },
  { id: 'google', name: 'Google', tagline: 'Gmail, Drive, YouTube', price: '$0.55', color: 'bg-[#EA4335]', icon: 'mail' },
  { id: 'discord', name: 'Discord', tagline: 'Instant Voice & Text Auth', price: '$0.08', color: 'bg-[#5865F2]', icon: 'sports_esports' },
  { id: 'twitter', name: 'Twitter / X', tagline: '2FA & Mobile Setup', price: '$0.32', color: 'bg-black border border-outline-variant', icon: 'close' },
  { id: 'microsoft', name: 'Microsoft', tagline: 'Azure, Outlook, Teams', price: '$0.18', color: 'bg-[#00A4EF]', icon: 'window' },
]

export default function Marketplace() {
  const [expanded, setExpanded] = useState(null)
  const [filter, setFilter] = useState('All')

  return (
    <AppShell searchPlaceholder="Search Country or Service (e.g. 'United States WhatsApp')...">
      <div className="flex flex-col lg:flex-row gap-gutter -mt-2">
        <div className="flex-1 space-y-gutter min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-component-gap">
            <div className="bg-surface-container border border-outline-variant p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant text-label-caps font-label-caps">COUNTRIES AVAILABLE</span>
                <span className="text-primary material-symbols-outlined">public</span>
              </div>
              <div className="mt-2 font-data-mono-lg text-data-mono-lg">184</div>
            </div>
            <div className="bg-surface-container border border-outline-variant p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant text-label-caps font-label-caps">ACTIVE SERVICES</span>
                <span className="text-primary material-symbols-outlined">apps</span>
              </div>
              <div className="mt-2 font-data-mono-lg text-data-mono-lg">1,240</div>
            </div>
            <div className="bg-surface-container border border-outline-variant p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant text-label-caps font-label-caps">NUMBERS ONLINE</span>
                <span className="text-primary material-symbols-outlined">signal_cellular_alt</span>
              </div>
              <div className="mt-2 font-data-mono-lg text-data-mono-lg">542,912</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="font-headline-sm text-headline-sm">Marketplace Services</h2>
            <div className="flex gap-2">
              {['All', 'Social', 'Crypto', 'Email'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 rounded-full text-label-caps font-label-caps transition-colors ${
                    filter === f
                      ? 'bg-primary/10 text-primary border border-primary/30'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-component-gap pb-12">
            {services.map((s) => (
              <div
                key={s.id}
                className="bg-surface-container border border-outline-variant rounded-xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer"
                onClick={() => setExpanded(expanded === s.id ? null : s.id)}
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${s.color} rounded-full flex items-center justify-center text-white`}>
                      <span className="material-symbols-outlined icon-filled">{s.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm leading-none">{s.name}</h3>
                      <p className="text-body-sm text-outline mt-1">{s.tagline}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-outline font-bold uppercase tracking-widest">Starting at</div>
                    <div className="font-data-mono-lg text-data-mono-lg text-primary">{s.price}</div>
                  </div>
                </div>

                {expanded === s.id && (
                  <div className="bg-surface-container-low border-t border-outline-variant p-6 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-label-caps font-label-caps text-outline">Select Country</label>
                        <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2 font-data-mono text-body-sm focus:border-primary focus:ring-0">
                          <option>United States (+1)</option>
                          <option>United Kingdom (+44)</option>
                          <option>India (+91)</option>
                          <option>Brazil (+55)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-label-caps font-label-caps text-outline">Select Operator</label>
                        <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2 font-data-mono text-body-sm focus:border-primary focus:ring-0">
                          <option>Any Operator (Fastest)</option>
                          <option>T-Mobile</option>
                          <option>Verizon</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg border border-outline-variant">
                      <div>
                        <div className="text-[10px] text-outline font-bold uppercase">Estimated Price</div>
                        <div className="font-data-mono-lg text-data-mono-lg text-on-surface">$0.45</div>
                      </div>
                      <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all">
                        <span className="material-symbols-outlined">bolt</span>
                        Order Now
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <aside className="w-full lg:w-[320px] shrink-0 flex flex-col gap-gutter">
          <div className="bg-surface-container border border-outline-variant rounded-xl flex flex-col">
            <div className="p-4 border-b border-outline-variant flex items-center justify-between">
              <h3 className="font-headline-sm text-[16px]">Recent Orders</h3>
              <span className="text-secondary flex items-center gap-1 text-[10px] font-bold uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                Live
              </span>
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-surface-container-high border border-outline-variant rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/10 rounded flex items-center justify-center text-green-500">
                    <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                  </div>
                  <div>
                    <div className="text-body-sm font-bold">WhatsApp</div>
                    <div className="text-[10px] text-outline font-data-mono">United Kingdom • #9824</div>
                  </div>
                </div>
                <div className="mt-3 font-data-mono text-data-mono text-primary flex items-center justify-between">
                  <span>+44 7911 123456</span>
                  <span className="text-[12px] bg-secondary/10 px-1.5 py-0.5 rounded">WAITING...</span>
                </div>
              </div>
              <div className="bg-surface-container-high border border-outline-variant rounded-lg p-3 opacity-80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#26A5E4]/10 rounded flex items-center justify-center text-[#26A5E4]">
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </div>
                  <div>
                    <div className="text-body-sm font-bold">Telegram</div>
                    <div className="text-[10px] text-outline font-data-mono">USA • 2 mins ago</div>
                  </div>
                </div>
                <div className="mt-3 font-data-mono text-data-mono text-on-surface flex items-center justify-between">
                  <span>+1 202 555 0192</span>
                  <span className="text-[12px] text-outline">G-291823</span>
                </div>
                <div className="mt-1 text-[10px] text-secondary font-bold">SUCCESSFUL</div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container border border-outline-variant rounded-xl p-4">
            <div className="text-label-caps font-label-caps text-outline mb-3 uppercase">System Status</div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-body-sm text-on-surface-variant">API Endpoint</span>
              <span className="font-data-mono text-[12px] text-secondary">24ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-body-sm text-on-surface-variant">SMS Delivery</span>
              <span className="font-data-mono text-[12px] text-secondary">98.2%</span>
            </div>
          </div>
        </aside>
      </div>
    </AppShell>
  )
}