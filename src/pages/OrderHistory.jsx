import { useState } from 'react'
import AppShell from '../components/layout/AppShell.jsx'

const orders = [
  { id: '9428-AQ', service: 'Telegram', icon: 'send', color: '#24A1DE', country: 'USA (+1)', flag: '🇺🇸', number: '+1 (415) 555-0192', cost: '$1.25', date: 'Jul 12, 14:32', status: 'Completed', tone: 'secondary', code: '882-104' },
  { id: '9427-XB', service: 'WhatsApp', icon: 'chat_bubble', color: '#25D366', country: 'UK (+44)', flag: '🇬🇧', number: '+44 7700 900077', cost: '$0.85', date: 'Jul 12, 14:15', status: 'Pending', tone: 'primary', code: null },
  { id: '9426-CZ', service: 'Google', icon: 'mail', color: '#DB4437', country: 'India (+91)', flag: '🇮🇳', number: '+91 98765 43210', cost: '$0.45', date: 'Jul 12, 12:44', status: 'Expired', tone: 'error', code: null },
  { id: '9425-ML', service: 'Amazon', icon: 'shopping_bag', color: '#FF9900', country: 'Germany (+49)', flag: '🇩🇪', number: '+49 1522 1234567', cost: '$1.10', date: 'Jul 12, 11:02', status: 'Completed', tone: 'secondary', code: '551-902' },
]

const toneClasses = {
  secondary: 'bg-secondary-container/20 text-secondary border border-secondary-container',
  primary: 'bg-primary-container/10 text-primary border border-primary-container/30',
  error: 'bg-error-container/20 text-error border border-error-container/30',
}

export default function OrderHistory() {
  const [selected, setSelected] = useState(null)

  return (
    <AppShell searchPlaceholder="Search orders...">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-end flex-wrap gap-4">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Order History</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Manage and review your SMS verification logs across all regions.
              </p>
            </div>
            <button className="flex items-center gap-2 border border-outline-variant px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-body-sm">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export CSV
            </button>
          </div>

          <div className="flex flex-wrap gap-4 items-center bg-surface-container-low p-4 rounded-xl border border-outline-variant">
            <div className="flex items-center gap-2 border-r border-outline-variant pr-4 mr-2">
              <span className="material-symbols-outlined text-on-surface-variant">filter_list</span>
              <span className="text-label-caps font-label-caps text-on-surface-variant uppercase">Filters</span>
            </div>
            <select className="bg-surface-container border border-outline-variant rounded-lg px-3 py-1.5 text-body-sm focus:outline-none focus:border-primary">
              <option>All Status</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Expired</option>
            </select>
            <select className="bg-surface-container border border-outline-variant rounded-lg px-3 py-1.5 text-body-sm focus:outline-none focus:border-primary">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
            </select>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-body-sm text-on-surface-variant">Showing {orders.length} of 254 orders</span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container border border-outline-variant rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high/50 border-b border-outline-variant">
                  <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Order ID</th>
                  <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Service</th>
                  <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Country</th>
                  <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Phone Number</th>
                  <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Cost</th>
                  <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Date</th>
                  <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Status</th>
                  <th className="px-6 py-4" />
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {orders.map((o) => (
                  <tr key={o.id} onClick={() => setSelected(o)} className="hover:bg-surface-container-high transition-colors cursor-pointer group">
                    <td className="px-6 py-4 font-data-mono text-data-mono text-primary">#{o.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#1C1C1E] flex items-center justify-center border border-outline-variant">
                          <span className="material-symbols-outlined icon-filled text-[18px]" style={{ color: o.color }}>{o.icon}</span>
                        </div>
                        <span className="font-body-sm text-body-sm">{o.service}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[18px]">{o.flag}</span>
                        <span className="font-body-sm text-body-sm">{o.country}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-data-mono text-data-mono text-on-surface">{o.number}</td>
                    <td className="px-6 py-4 font-data-mono text-data-mono text-on-surface">{o.cost}</td>
                    <td className="px-6 py-4 text-body-sm text-on-surface-variant">{o.date}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-bold ${toneClasses[o.tone]}`}>
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            o.tone === 'secondary' ? 'bg-secondary' : o.tone === 'primary' ? 'bg-primary animate-pulse' : 'bg-error'
                          }`}
                        />
                        {o.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                        chevron_right
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-between items-center bg-surface-container rounded-xl p-4 border border-outline-variant flex-wrap gap-4">
          <div className="flex items-center gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Volume Today</p>
              <p className="font-data-mono text-data-mono text-on-surface">1,482 SMS</p>
            </div>
            <div className="w-px h-8 bg-outline-variant" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Success Rate</p>
              <p className="font-data-mono text-data-mono text-secondary">98.4%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detail overlay + drawer */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          selected ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSelected(null)}
      />
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-[480px] glass-panel z-[70] transition-transform duration-300 flex flex-col ${
          selected ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selected && (
          <>
            <div className="p-6 border-b border-outline-variant flex justify-between items-center">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Order Details</h3>
              <button onClick={() => setSelected(null)} className="p-2 hover:bg-surface-container-highest rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              <div className="space-y-4">
                <div>
                  <span className="font-data-mono-lg text-data-mono-lg text-primary">#{selected.id}</span>
                  <p className="text-body-sm text-on-surface-variant mt-1">
                    Status: <span className="text-secondary font-bold">{selected.status}</span>
                  </p>
                </div>
                {selected.code ? (
                  <div className="p-4 bg-background border border-outline-variant rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-label-caps font-label-caps text-on-surface-variant uppercase mb-1">OTP Received</p>
                      <p className="font-data-mono-lg text-[24px] tracking-[0.2em] text-on-surface select-all">{selected.code}</p>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-background border border-outline-variant rounded-xl text-on-surface-variant text-body-sm">
                    No code received for this order.
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-container rounded-xl border border-outline-variant">
                  <p className="text-label-caps font-label-caps text-on-surface-variant uppercase mb-2">Service</p>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">{selected.icon}</span>
                    <span className="font-body-base text-body-base text-on-surface">{selected.service}</span>
                  </div>
                </div>
                <div className="p-4 bg-surface-container rounded-xl border border-outline-variant">
                  <p className="text-label-caps font-label-caps text-on-surface-variant uppercase mb-2">Cost</p>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">payments</span>
                    <span className="font-body-base text-body-base text-on-surface">{selected.cost} USD</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-outline-variant bg-surface-container flex gap-3">
              <button className="flex-1 bg-surface-container-highest border border-outline-variant py-3 rounded-lg font-bold hover:bg-white/5 transition-all">
                Support Ticket
              </button>
              <button className="flex-1 bg-primary text-on-primary py-3 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all">
                Report Error
              </button>
            </div>
          </>
        )}
      </div>
    </AppShell>
  )
}
