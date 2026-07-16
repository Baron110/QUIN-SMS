const SIZES = {
  sm: { word: 'text-[14px]' },
  default: { word: 'text-[17px]' },
  lg: { word: 'text-[20px]' },
}

export default function Logo({ size = 'default', className = '' }) {
  const s = SIZES[size] || SIZES.default

  return (
    <span className={`font-headline-sm ${s.word} font-black text-on-surface tracking-tight ${className}`}>
      QUIN-SMS
    </span>
  )
}