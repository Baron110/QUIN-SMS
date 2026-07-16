import { useNavigate } from 'react-router-dom'
import { Zap, ShieldCheck, Gauge, MousePointerClick, Lock, Laptop, Smartphone, ArrowRight, Terminal, Globe } from 'lucide-react'
import Logo from '../components/Logo.jsx'

const FEATURES = [
  { Icon: Zap, title: 'Verification Speed', body: 'Codes delivered in under 3 seconds on average across our global network.' },
  { Icon: ShieldCheck, title: 'Non-VoIP Quality', body: 'Real SIM-backed numbers from tier-1 carriers that bypass all platform checks.' },
  { Icon: Gauge, title: '99.9% Uptime', body: 'Redundant global infrastructure ensures service availability 24/7/365.' },
  { Icon: MousePointerClick, title: 'Ease of Use', body: 'Intuitive dashboard and one-click purchasing designed for speed.' },
]

const STATS = [
  { value: '150+', label: 'COUNTRIES', color: 'text-primary' },
  { value: '1,200+', label: 'SERVICES', color: 'text-white' },
  { value: '5M+', label: 'ORDERS', color: 'text-white' },
  { value: '99.99%', label: 'UPTIME', color: 'text-secondary' },
]

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="font-body-base overflow-x-hidden bg-background text-on-surface min-h-screen">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-panel h-16 flex items-center px-4 sm:px-gutter md:px-container-desktop justify-between">
        <Logo size="sm" />
        <div className="hidden md:flex items-center gap-8">
          <a className="font-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#services">SERVICES</a>
          <a className="font-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#features">FEATURES</a>
          <a className="font-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#pricing">PRICING</a>
          <a className="font-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#api">API</a>
        </div>
        <div className="flex items-center gap-2 sm:gap-component-gap">
          <button onClick={() => navigate('/login')} className="px-2.5 sm:px-4 py-2 text-on-surface font-body-sm hover:text-primary transition-colors text-sm sm:text-base">
            Log In
          </button>
          <button onClick={() => navigate('/signup')} className="bg-primary text-on-primary px-3.5 sm:px-5 py-2 rounded-lg font-body-sm font-bold hover:opacity-90 transition-all active:scale-95 text-sm sm:text-base whitespace-nowrap">
            Get Started
          </button>
        </div>
      </nav>

      <main className="relative pt-16">
        {/* Hero */}
        <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-gutter pt-16 pb-12 sm:pt-20 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="relative z-10 w-full max-w-7xl mx-auto space-y-10 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-outline-variant bg-surface-container-low text-primary font-label-caps text-[10px] sm:text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>INSTANT VERIFICATION IN 150+ COUNTRIES</span>
              </div>
              <h1 className="font-display-lg text-white leading-tight text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight">
                <span className="text-gradient">Buy a number.</span><br />
                <span className="text-primary">Get your code in seconds.</span>
              </h1>
              <p className="font-body-base text-on-surface-variant max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
                Reliable, non-VoIP numbers from 150+ countries. Browse services, purchase a number, and receive your verification code — all from your browser.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button onClick={() => navigate('/signup')} className="w-full sm:w-auto bg-primary text-on-primary px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-headline-sm font-bold hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all">
                  Browse Services
                </button>
                <a href="#pricing" className="w-full sm:w-auto hairline-border bg-surface-container hover:bg-surface-container-high px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-headline-sm text-on-surface transition-all flex items-center justify-center gap-2">
                  View Pricing
                </a>
              </div>
            </div>

            {/* Browser mockup - desktop/tablet only */}
            <div className="relative max-w-5xl mx-auto mt-12 sm:mt-16 hidden md:block">
              <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full" />
              <div className="relative glass-panel rounded-2xl overflow-hidden shadow-2xl border border-outline-variant">
                <div className="bg-surface-container-high h-10 flex items-center px-4 gap-2 border-b hairline-border">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>
                  <div className="mx-auto bg-surface-container-low px-4 py-1 rounded text-[10px] text-on-surface-variant flex items-center gap-2">
                    <Lock size={12} />
                    quin-sms.com/marketplace
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-0 bg-background/50">
                  <div className="p-6 border-r hairline-border bg-surface-container-low/30 text-left">
                    <h4 className="font-label-caps text-on-surface-variant mb-4">SELECT SERVICE</h4>
                    <div className="space-y-3">
                      <div className="bg-surface-container-high border border-primary/50 p-3 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#4285F4] flex items-center justify-center font-bold text-white text-xs">G</div>
                          <span className="text-sm font-semibold">Google</span>
                        </div>
                        <span className="font-data-mono text-primary text-xs">$0.45</span>
                      </div>
                      <div className="bg-surface-container p-3 rounded-xl flex items-center justify-between opacity-50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center font-bold text-white text-xs">WA</div>
                          <span className="text-sm">WhatsApp</span>
                        </div>
                        <span className="font-data-mono text-xs">$0.30</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 p-8 text-left relative min-h-[300px]">
                    <h4 className="font-label-caps text-on-surface-variant mb-6">ACTIVE VERIFICATIONS</h4>
                    <div className="bg-surface-container-highest/50 border border-outline-variant rounded-2xl p-6 relative overflow-hidden">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                          <p className="text-xs font-label-caps text-on-surface-variant mb-1">GOOGLE · UNITED STATES</p>
                          <p className="text-2xl font-data-mono-lg text-white">+1 (202) 555-0143</p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold animate-pulse">
                          <span className="w-1 h-1 rounded-full bg-secondary" />
                          WAITING FOR SMS
                        </span>
                      </div>
                      <div className="mt-8 bg-primary/5 border-2 border-primary/20 rounded-xl p-5 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-label-caps text-primary mb-1">CODE RECEIVED</p>
                          <p className="text-sm text-on-surface-variant italic">Your Google verification code</p>
                        </div>
                        <div className="text-3xl font-data-mono-lg text-primary tracking-wider">842219</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simplified mockup - mobile only */}
            <div className="relative max-w-sm mx-auto mt-10 md:hidden">
              <div className="relative glass-panel rounded-2xl overflow-hidden shadow-2xl border border-outline-variant p-5 text-left">
                <p className="text-[10px] font-label-caps text-on-surface-variant mb-2">GOOGLE · UNITED STATES</p>
                <p className="text-lg font-data-mono-lg text-white mb-3">+1 (202) 555-0143</p>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold mb-4">
                  <span className="w-1 h-1 rounded-full bg-secondary" />
                  WAITING FOR SMS
                </span>
                <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-4 flex items-center justify-between">
                  <p className="text-[10px] font-label-caps text-primary">CODE RECEIVED</p>
                  <div className="text-2xl font-data-mono-lg text-primary tracking-wider">842219</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16 sm:py-24 px-4 sm:px-gutter max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-display-lg text-white mb-4 text-3xl sm:text-4xl md:text-5xl">Engineered for Reliability</h2>
            <p className="font-body-base text-on-surface-variant max-w-2xl mx-auto">
              Infrastructure built to ensure your verification never fails, no matter the scale.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-gutter">
            {FEATURES.map(({ Icon, title, body }) => (
              <div key={title} className="glass-panel p-6 sm:p-8 rounded-2xl hover:border-primary/30 transition-colors">
                <Icon className="text-primary mb-5 sm:mb-6" size={30} />
                <h3 className="font-headline-sm text-white mb-2">{title}</h3>
                <p className="font-body-sm text-on-surface-variant">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-24 bg-surface-container-lowest border-y hairline-border relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-gutter grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center relative z-10">
            {STATS.map((s, i) => (
              <div key={s.label} className="animate-stat" style={{ animationDelay: `${i * 0.5}s` }}>
                <div className={`font-display-lg mb-2 text-3xl sm:text-4xl md:text-5xl ${s.color}`}>{s.value}</div>
                <div className="font-label-caps text-on-surface-variant tracking-widest text-[10px] sm:text-xs">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
        </section>

        {/* Price Estimator */}
        <section id="pricing" className="py-20 sm:py-32 px-4 sm:px-gutter">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="font-display-lg text-white mb-4 text-3xl sm:text-4xl md:text-5xl">Quick Estimate</h2>
              <p className="font-body-base text-on-surface-variant">Select a service to see real-time pricing and availability.</p>
            </div>
            <div className="glass-panel rounded-3xl p-5 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <label className="block font-label-caps text-on-surface-variant mb-3">SELECT SERVICE</label>
                    <select className="w-full bg-surface-container-high border border-outline-variant rounded-xl text-on-surface p-4 focus:ring-primary focus:border-primary">
                      <option>WhatsApp</option>
                      <option defaultValue>Google / Gmail</option>
                      <option>Telegram</option>
                      <option>Discord</option>
                      <option>Instagram</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-caps text-on-surface-variant mb-3">SELECT COUNTRY</label>
                    <select className="w-full bg-surface-container-high border border-outline-variant rounded-xl text-on-surface p-4 focus:ring-primary focus:border-primary">
                      <option defaultValue>United States (+1)</option>
                      <option>United Kingdom (+44)</option>
                      <option>Germany (+49)</option>
                      <option>India (+91)</option>
                    </select>
                  </div>
                </div>
                <div className="bg-surface-container rounded-2xl p-6 sm:p-8 border border-primary/20 text-center space-y-4">
                  <div className="font-label-caps text-primary">ESTIMATED PRICE</div>
                  <div className="text-5xl sm:text-6xl font-data-mono-lg text-white">$0.45</div>
                  <div className="flex items-center justify-center gap-2 text-secondary font-body-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    Numbers Available (2,401)
                  </div>
                  <button onClick={() => navigate('/signup')} className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline-sm mt-4 hover:opacity-90 transition-opacity">
                    Buy Number
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-platform */}
        <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="order-2 lg:order-1 relative max-w-[280px] mx-auto lg:max-w-none">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-50" />
                <div className="relative glass-panel rounded-[2.5rem] p-3 border border-outline-variant">
                  <svg viewBox="0 0 320 660" className="w-full h-auto">
                    <rect x="2" y="2" width="316" height="656" rx="52" fill="#0A0A0B" stroke="#27272A" strokeWidth="2" />
                    <text x="26" y="38" fill="#e5e2e3" fontSize="14" fontFamily="Inter" fontWeight="600">9:41</text>
                    <g transform="translate(252,26)">
                      <rect x="0" y="6" width="3" height="6" rx="1" fill="#e5e2e3" />
                      <rect x="5" y="4" width="3" height="8" rx="1" fill="#e5e2e3" />
                      <rect x="10" y="2" width="3" height="10" rx="1" fill="#e5e2e3" />
                      <rect x="15" y="0" width="3" height="12" rx="1" fill="#e5e2e3" />
                      <path d="M24 10 a9 9 0 0 1 14 0" stroke="#e5e2e3" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                      <rect x="42" y="1" width="20" height="11" rx="3" fill="none" stroke="#e5e2e3" strokeWidth="1.4" />
                      <rect x="44" y="3" width="14" height="7" rx="1.5" fill="#e5e2e3" />
                    </g>
                    <rect x="112" y="16" width="96" height="30" rx="15" fill="#000" />
                    <text x="160" y="90" textAnchor="middle" fill="#8c909f" fontSize="11" fontFamily="JetBrains Mono">+1 (202) 555-0143</text>
                    <text x="160" y="112" textAnchor="middle" fill="#4edea3" fontSize="10" fontFamily="Inter">● WAITING FOR SMS</text>
                    <rect x="40" y="300" width="240" height="90" rx="16" fill="#adc6ff" opacity="0.08" stroke="#adc6ff" strokeOpacity="0.3" />
                    <text x="160" y="335" textAnchor="middle" fill="#adc6ff" fontSize="10" fontFamily="Inter">CODE RECEIVED</text>
                    <text x="160" y="370" textAnchor="middle" fill="#ffffff" fontSize="28" fontFamily="JetBrains Mono" fontWeight="700">842219</text>
                  </svg>
                </div>
              </div>
              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left">
                <span className="font-label-caps text-primary tracking-widest">ECOSYSTEM</span>
                <h2 className="font-display-lg text-white leading-tight text-3xl sm:text-4xl md:text-5xl">Verification on any device.</h2>
                <p className="font-body-base text-on-surface-variant text-base sm:text-lg">
                  Bridge the gap between your desktop workflow and mobile verification needs. QUIN-SMS is optimized for every screen size.
                </p>
                <div className="space-y-6 text-left">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
                      <Laptop size={20} />
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-white">Browse & Buy on Desktop</h4>
                      <p className="font-body-sm text-on-surface-variant">A powerful dashboard for managing large-scale verification needs.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
                      <Smartphone size={20} />
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-white">Receive Code on Mobile</h4>
                      <p className="font-body-sm text-on-surface-variant">View incoming codes instantly on our mobile-responsive UI.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developer / API section - secondary, not hero */}
        <section id="api" className="py-20 sm:py-32 bg-surface-container-lowest border-y hairline-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="text-center lg:text-left">
              <p className="font-label-caps text-primary mb-4 tracking-widest">FOR DEVELOPERS</p>
              <h2 className="font-display-lg text-white mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl">Build with our API.</h2>
              <p className="font-body-base text-on-surface-variant mb-8 sm:mb-12 text-base sm:text-lg">
                Scale your verification needs programmatically. Direct access to our entire global number pool.
              </p>
              <a href="#" className="hairline-border bg-surface-container hover:bg-surface-container-high px-6 py-3 rounded-lg font-body-sm text-on-surface transition-all inline-flex items-center gap-2">
                View API Documentation
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full" />
              <div className="relative glass-panel rounded-2xl p-4 sm:p-6 font-data-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b hairline-border">
                  <span className="w-3 h-3 rounded-full bg-red-500/20" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <span className="w-3 h-3 rounded-full bg-green-500/20" />
                  <span className="ml-2 text-[10px] text-on-surface-variant">request_otp.sh</span>
                </div>
                <div className="text-secondary whitespace-pre">
                  <span className="text-on-surface-variant opacity-50">$</span> curl -X POST https://api.quin-sms.com/v1/request \{'\n'}
                  {'  '}-H "Authorization: Bearer <span className="text-primary">KEY_REDACTED</span>" \{'\n'}
                  {'  '}-d '{'{'} "country": <span className="text-white">"US"</span>, "service": <span className="text-white">"google"</span> {'}'}'
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 sm:py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-gutter">
            <h2 className="font-display-lg text-white mb-6 text-3xl sm:text-4xl md:text-5xl">Ready to get verified?</h2>
            <p className="font-body-base text-on-surface-variant mb-8 sm:mb-10">
              Join thousands of users getting instant codes every day. No subscription required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => navigate('/signup')} className="w-full sm:w-auto bg-primary text-on-primary px-10 py-4 rounded-xl font-headline-sm font-bold hover:scale-105 transition-transform">
                Get Started for Free
              </button>
              <a href="#" className="text-on-surface hover:text-primary font-headline-sm transition-colors">Contact Sales →</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t hairline-border pt-16 sm:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-gutter grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 mb-16 sm:mb-24">
          <div className="col-span-2 lg:col-span-2">
            <Logo size="sm" className="mb-6" />
            <p className="text-on-surface-variant font-body-sm max-w-xs">Premium SMS verification infrastructure for the modern web.</p>
          </div>
          <div>
            <h5 className="font-label-caps text-white mb-4 sm:mb-6">Product</h5>
            <ul className="space-y-3 sm:space-y-4 font-body-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#services">Browse Services</a></li>
              <li><a className="hover:text-primary transition-colors" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Countries</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">API Status</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-caps text-white mb-4 sm:mb-6">Company</h5>
            <ul className="space-y-3 sm:space-y-4 font-body-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Security</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-caps text-white mb-4 sm:mb-6">Support</h5>
            <ul className="space-y-3 sm:space-y-4 font-body-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact Support</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Community</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-gutter flex flex-col md:flex-row items-center justify-between gap-6 border-t hairline-border pt-12">
          <p className="font-data-mono text-body-sm text-on-surface-variant opacity-50 text-center md:text-left">© 2026 QUIN-SMS. All systems operational.</p>
          <div className="flex gap-6">
            <a className="text-on-surface-variant hover:text-white transition-colors" href="#" aria-label="Terminal"><Terminal size={18} /></a>
            <a className="text-on-surface-variant hover:text-white transition-colors" href="#" aria-label="Status page"><Globe size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}