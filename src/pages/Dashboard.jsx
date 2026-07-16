import { useNavigate } from 'react-router-dom'
import AppShell from '../components/layout/AppShell.jsx'

const recentOrders = [
  { id: '#77281', service: 'Telegram', icon: 'chat', number: '+1 202 555 0128', status: 'Success', price: '$0.45', tone: 'secondary' },
  { id: '#77278', service: 'Google', icon: 'mail', number: '+44 7911 123456', status: 'Waiting', price: '$0.95', tone: 'tertiary' },
  { id: '#77265', service: 'WhatsApp', icon: 'forum', number: '+62 812 3456 7890', status: 'Expired', price: '$0.30', tone: 'error' },
]

const toneClasses = {
  secondary: 'bg-secondary/10 text-secondary',
  tertiary: 'bg-tertiary/10 text-tertiary',
  error: 'bg-error/10 text-error',
}

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <AppShell searchPlaceholder="Search services...">
      <div className="space-y-8 max-w-[1400px]">
        <section className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <h2 className="font-display-lg text-display-lg tracking-tight mb-2">Welcome back, Baron</h2>
            <p className="text-on-surface-variant font-body-base">You have 3 active virtual numbers across 3 regions.</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low border border-outline-variant rounded-full">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-data-mono text-xs uppercase text-secondary">System Online</span>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4 glass-card p-6 rounded-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16" />
            <div className="flex justify-between items-start relative z-10">
              <div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1 block">Account Balance</span>
                <h3 className="font-data-mono text-[42px] font-bold leading-tight text-on-surface">$142.50</h3>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl">account_balance_wallet</span>
            </div>
            <div className="mt-8 relative z-10">
              <button
                onClick={() => navigate('/wallet')}
                className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined">add_card</span>
                Add Funds
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 glass-card p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-tertiary">bolt</span>
              <h3 className="font-headline-sm text-headline-sm">Quick Order</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Service</label>
                <select className="w-full bg-background border border-outline-variant rounded px-4 py-2.5 text-on-surface focus:border-primary outline-none">
                  <option>WhatsApp</option>
                  <option>Telegram</option>
                  <option>Google</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Country</label>
                <select className="w-full bg-background border border-outline-variant rounded px-4 py-2.5 text-on-surface focus:border-primary outline-none">
                  <option>USA (+1)</option>
                  <option>United Kingdom (+44)</option>
                  <option>Germany (+49)</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => navigate('/marketplace')}
                  className="w-full h-[46px] bg-secondary text-on-secondary font-bold rounded hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                  Buy Instantly
                </button>
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <div className="flex items-center gap-2">
                <span className="font-data-mono text-xs text-on-surface-variant">Avg. Receive Time:</span>
                <span className="font-data-mono text-xs text-secondary">4s</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-data-mono text-xs text-on-surface-variant">Price:</span>
                <span className="font-data-mono text-xs text-primary">$0.85</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 xl:col-span-8 glass-card rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
              <h3 className="font-headline-sm text-headline-sm">Recent Activity</h3>
              <button onClick={() => navigate('/history')} className="text-primary text-sm font-medium hover:underline">
                View All Logs
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant uppercase">ID</th>
                    <th className="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant uppercase">Service</th>
                    <th className="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant uppercase">Number</th>
                    <th className="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant uppercase">Status</th>
                    <th className="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {recentOrders.map((o) => (
                    <tr key={o.id} className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-6 py-4 font-data-mono text-xs">{o.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm">{o.icon}</span>
                          <span className="font-body-sm">{o.service}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-data-mono text-sm">{o.number}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${toneClasses[o.tone]}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${o.tone === 'secondary' ? 'bg-secondary' : o.tone === 'tertiary' ? 'bg-tertiary animate-pulse' : 'bg-error'}`} />
                          {o.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-data-mono text-sm text-right">{o.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-4">
            <div className="p-8 rounded-xl border-2 border-dashed border-outline-variant bg-surface-container-low flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl text-primary">rocket_launch</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm mb-2">Get Started</h4>
              <p className="text-on-surface-variant font-body-sm mb-8 px-4">
                New to QUIN-SMS? Follow these steps to get your first number.
              </p>
              <div className="w-full space-y-3">
                {[
                  { n: 1, label: 'Add funds to your wallet', active: true, to: '/wallet' },
                  { n: 2, label: 'Buy your first number', active: false, to: '/marketplace' },
                  { n: 3, label: 'Receive your first code', active: false, to: '/active-numbers' },
                ].map((s) => (
                  <button
                    key={s.n}
                    onClick={() => navigate(s.to)}
                    className={`w-full flex items-center gap-3 p-3 bg-surface rounded border border-outline-variant hover:border-primary/50 transition-colors group ${
                      s.active ? '' : 'opacity-60'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">
                      {s.n}
                    </span>
                    <span className="font-body-sm flex-1 text-left">{s.label}</span>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                      chevron_right
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  )
}
