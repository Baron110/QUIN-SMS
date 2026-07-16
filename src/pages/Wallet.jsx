import AppShell from '../components/layout/AppShell.jsx'

const fundingMethods = [
  { icon: 'account_balance', title: 'Bank Transfer', desc: 'Instant deposit via Monnify \u2014 no fees' },
]

const transactions = [
  { date: '2026-07-12 14:22', method: 'USDT (TRC20)', icon: 'currency_bitcoin', id: 'tx_9821...4x8b', amount: '+$250.00', status: 'Completed', tone: 'secondary' },
  { date: '2026-07-10 09:15', method: 'Mastercard', icon: 'credit_card', id: 'st_ch_931...2l0o', amount: '+$50.00', status: 'Completed', tone: 'secondary' },
  { date: '2026-07-06 18:45', method: 'Wire Transfer', icon: 'account_balance', id: 'ba_tr_114...9p3w', amount: '+$1,000.00', status: 'Pending', tone: 'tertiary' },
  { date: '2026-07-03 11:10', method: 'Balance Usage', icon: 'payments', id: 'ver_92...f201', amount: '-$1.20', status: 'Applied', tone: 'neutral' },
]

export default function Wallet() {
  return (
    <AppShell searchPlaceholder="Search transaction ID...">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7 card-hairline rounded-xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
            <div className="relative z-10">
              <span className="text-label-caps font-label-caps text-on-surface-variant tracking-widest uppercase">Current Liquidity</span>
              <div className="mt-2 flex items-baseline gap-3 flex-wrap">
                <span className="font-display-lg text-display-lg text-primary">$142.50</span>
                <span className="font-data-mono text-secondary text-sm bg-secondary/10 px-2 py-0.5 rounded">+12.4% vs last mo</span>
              </div>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30 mt-8">
              <div>
                <p className="text-xs text-on-surface-variant font-medium mb-1">Total Lifetime Spend</p>
                <p className="font-data-mono-lg text-data-mono-lg text-on-surface">$1,429.30</p>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-medium mb-1">Active Verifications</p>
                <p className="font-data-mono-lg text-data-mono-lg text-on-surface">3</p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 grid grid-rows-2 gap-6">
            <div className="card-hairline rounded-xl p-6 flex items-center justify-between">
              <div>
                <p className="text-label-caps font-label-caps text-on-surface-variant uppercase mb-2">Monthly Deposits</p>
                <h3 className="font-headline-md text-headline-md text-on-surface">$450.00</h3>
              </div>
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
              </div>
            </div>
            <div className="card-hairline rounded-xl p-6 flex items-center justify-between">
              <div>
                <p className="text-label-caps font-label-caps text-on-surface-variant uppercase mb-2">Usage Efficiency</p>
                <h3 className="font-headline-md text-headline-md text-on-surface">94.2%</h3>
              </div>
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-3xl">speed</span>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h2 className="font-headline-md text-headline-md text-on-surface">Deposit Funds</h2>
            <span className="text-body-sm text-on-surface-variant">Auto-recharge available below $10</span>
          </div>
          <div className="grid grid-cols-1 max-w-sm gap-4">
            {fundingMethods.map((m) => (
              <button key={m.title} className="card-hairline rounded-xl p-6 text-left group hover:border-primary hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">{m.icon}</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">{m.title}</h4>
                <p className="text-body-sm text-on-surface-variant mb-4">{m.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  SELECT METHOD <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h2 className="font-headline-md text-headline-md text-on-surface">Transaction History</h2>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-surface-container-high text-xs font-bold rounded-lg border border-outline-variant hover:bg-surface-container-highest transition-colors">
                Export CSV
              </button>
              <button className="px-4 py-2 bg-surface-container-high text-xs font-bold rounded-lg border border-outline-variant hover:bg-surface-container-highest transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">filter_list</span> Filter
              </button>
            </div>
          </div>
          <div className="card-hairline rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Date & Time</th>
                    <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Method</th>
                    <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Transaction ID</th>
                    <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Amount</th>
                    <th className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  {transactions.map((t) => (
                    <tr key={t.id} className="hover:bg-surface-container-high/50 transition-colors">
                      <td className="px-6 py-5 font-data-mono text-sm text-on-surface">{t.date}</td>
                      <td className="px-6 py-5 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-xl">{t.icon}</span>
                        <span className="text-body-sm">{t.method}</span>
                      </td>
                      <td className="px-6 py-5 font-data-mono text-xs text-on-surface-variant">{t.id}</td>
                      <td className={`px-6 py-5 font-data-mono text-sm font-bold ${t.amount.startsWith('-') ? 'text-error' : 'text-secondary'}`}>
                        {t.amount}
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            t.tone === 'secondary'
                              ? 'bg-secondary-container/20 text-secondary'
                              : t.tone === 'tertiary'
                              ? 'bg-tertiary-container/20 text-tertiary'
                              : 'bg-surface-container-highest text-on-surface-variant'
                          }`}
                        >
                          {t.tone !== 'neutral' && (
                            <span className={`w-1.5 h-1.5 rounded-full ${t.tone === 'secondary' ? 'bg-secondary' : 'bg-tertiary'}`} />
                          )}
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-surface-container-low border-t border-outline-variant flex items-center justify-between">
              <span className="text-xs text-on-surface-variant">Showing 1-4 of 24 transactions</span>
              <div className="flex gap-2">
                <button disabled className="p-1.5 bg-surface-container-high rounded border border-outline-variant disabled:opacity-30">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="p-1.5 bg-surface-container-high rounded border border-outline-variant">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  )
}