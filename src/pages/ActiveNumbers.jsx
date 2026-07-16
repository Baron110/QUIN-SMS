import { useState } from 'react'
import AppShell from '../components/layout/AppShell.jsx'

const dots = Array.from({ length: 6 })

export default function ActiveNumbers() {
  const [toast, setToast] = useState(null)

  function copyToClipboard(text) {
    navigator.clipboard?.writeText(text)
    setToast('Code copied to clipboard')
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <AppShell searchPlaceholder="Search orders, numbers...">
      <div className="mb-10 flex justify-between items-end flex-wrap gap-4">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-1">Active Numbers</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Real-time status of your virtual numbers and incoming SMS codes.
          </p>
        </div>
        <div className="glass-card px-4 py-2 rounded flex flex-col items-end">
          <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Active Orders</span>
          <span className="font-data-mono text-data-mono text-primary">03</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-5xl">
        {/* Code received */}
        <div className="relative overflow-hidden bg-surface-container border border-secondary/50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_20px_-10px_rgba(78,222,163,0.3)]">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/20">
                <span className="material-symbols-outlined icon-filled text-secondary text-2xl">mail</span>
              </div>
              <span className="font-label-caps text-label-caps text-on-surface-variant">GMAIL</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] px-1.5 py-0.5 bg-secondary-container/20 text-secondary border border-secondary/30 rounded font-bold">USA</span>
                <span className="text-[10px] text-on-surface-variant font-medium">Order #QN-9210-XC</span>
              </div>
              <span className="font-data-mono-lg text-data-mono-lg text-on-surface tracking-tighter">+1 (602) 555-0192</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center bg-secondary/5 border border-secondary/20 px-8 py-4 rounded-lg">
              <span className="text-[10px] text-secondary font-black uppercase tracking-[0.2em] mb-2">Code Received</span>
              <div className="flex items-center gap-4">
                <span className="font-data-mono text-[42px] leading-none text-secondary font-bold tracking-widest">482 910</span>
                <button
                  onClick={() => copyToClipboard('482910')}
                  className="p-3 bg-secondary text-on-secondary rounded hover:brightness-110 transition-colors active:scale-95"
                >
                  <span className="material-symbols-outlined text-xl">content_copy</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-48">
            <button className="w-full py-2.5 bg-secondary text-on-secondary font-bold text-body-sm rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">check_circle</span>
              Finish
            </button>
            <button className="w-full py-2.5 bg-surface-container-highest text-on-surface-variant font-bold text-body-sm rounded-lg border border-outline-variant hover:text-error hover:border-error transition-all">
              Cancel
            </button>
          </div>
        </div>

        {/* Waiting states */}
        {[
          { service: 'WHATSAPP', icon: 'chat', country: 'UK', order: '#QN-8821-ZM', number: '+44 7700 900123', color: 'primary' },
          { service: 'TELEGRAM', icon: 'send', country: 'NIGERIA', order: '#QN-1142-AP', number: '+234 810 555 1234', color: 'tertiary' },
        ].map((o) => (
          <div key={o.order} className="bg-surface-container border border-outline-variant rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className={`w-12 h-12 bg-${o.color}/10 rounded-full flex items-center justify-center border border-${o.color}/20`}>
                  <span className={`material-symbols-outlined text-${o.color} text-2xl`}>{o.icon}</span>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant">{o.service}</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] px-1.5 py-0.5 bg-${o.color}-container/20 text-${o.color} border border-${o.color}/30 rounded font-bold`}>
                    {o.country}
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-medium">Order {o.order}</span>
                </div>
                <span className="font-data-mono-lg text-data-mono-lg text-on-surface tracking-tighter">{o.number}</span>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center opacity-60">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
                  <span className="font-data-mono text-data-mono text-primary uppercase tracking-widest">Waiting for code</span>
                </div>
                <div className="h-10 w-48 bg-surface-container-high rounded flex gap-2 items-center justify-center px-4">
                  {dots.map((_, i) => (
                    <div key={i} className="w-2 h-1 bg-outline-variant rounded" />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-48">
              <button disabled className="w-full py-2.5 bg-surface-container-highest text-on-surface-variant/40 font-bold text-body-sm rounded-lg border border-outline-variant cursor-not-allowed opacity-50">
                Finish
              </button>
              <button className="w-full py-2.5 bg-surface-container-highest text-on-surface-variant font-bold text-body-sm rounded-lg border border-outline-variant hover:bg-error-container hover:text-on-error-container hover:border-error transition-all">
                Refund
              </button>
            </div>
          </div>
        ))}
      </div>

      {toast && (
        <div className="fixed bottom-gutter right-gutter z-50">
          <div className="px-6 py-3 rounded-lg shadow-xl border border-outline-variant flex items-center gap-3 glass-card">
            <span className="material-symbols-outlined text-secondary">check_circle</span>
            <span className="font-body-sm text-on-surface">{toast}</span>
          </div>
        </div>
      )}
    </AppShell>
  )
}
