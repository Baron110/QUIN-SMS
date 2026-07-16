const SIZES = {
  sm: { word: 'text-[15px]' },
  default: { word: 'text-[19px]' },
  lg: { word: 'text-[22px]' },
}

export default function Logo({ size = 'default', className = '' }) {
  const s = SIZES[size] || SIZES.default

  return (
    <span className={`font-headline-sm ${s.word} font-black tracking-tight ${className}`}>
      <span className="text-on-surface">QUIN</span>
      <span className="text-primary">-SMS</span>
    </span>
  )
}