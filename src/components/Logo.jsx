import logoImg from '../assets/logo.png'

const SIZES = {
  sm: { h: 'h-7', sub: 'text-[7px] mt-0.5' },
  default: { h: 'h-9', sub: 'text-[8px] mt-1' },
  lg: { h: 'h-11', sub: 'text-[9px] mt-1' },
}

export default function Logo({ size = 'default', className = '' }) {
  const s = SIZES[size] || SIZES.default

  return (
    <div className={`flex flex-col ${className}`}>
      <img src={logoImg} alt="QUIN-SMS" className={`${s.h} w-auto object-contain`} />
      <span className={`${s.sub} font-bold uppercase tracking-[0.2em] text-primary`}>
        SMS Verification
      </span>
    </div>
  )
}