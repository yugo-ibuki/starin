type StarinWrapProps = {
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const StaringWrap = ({ size, children }: StarinWrapProps) => {
  return (
    <div
      style={{
        transform: `scale(${size === 'sm' ? 0.1 : size === 'md' ? 0.3 : 0.6})`,
        marginRight: `${size === 'sm' ? -180 : size === 'md' ? -130 : -60}px`
      }}
    >
      {children}
    </div>
  )
}
