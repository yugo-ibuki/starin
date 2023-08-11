import './index.css'
import { useState } from 'react'
import { StaringWrap } from './StaringWrap.tsx'
import { Loading } from './Loading.tsx'
import { style } from './style.ts'

type Size = 'sm' | 'md' | 'lg'

export const defaultProps: StarinProps = {
  size: 'md',
  count: 5,
  rating: 0,
  isLoading: false
}

type StarinProps = {
  size: Size
  count: number
  rating: number
  isLoading?: boolean
}

const Starin = ({
  size = defaultProps.size,
  count = defaultProps.count,
  rating = defaultProps.rating,
  isLoading = defaultProps.isLoading
}: StarinProps) => {
  const [selectedNum, setSelectedNum] = useState<number>(rating)

  return (
    <>
      <div style={style.wrap}>
        {toArray(count).map((_, i) => {
          if (isLoading)
            return (
              <StaringWrap size={size}>
                <Loading key={i} />
              </StaringWrap>
            )

          return (
            <StaringWrap size={size}>
              <div
                key={i}
                className={`
                  'star-five',
                  ${
                    // coloring the stars before selectedNum
                    selectedNum - 1 >= i ? 'active' : ''
                  }
                  `}
                onClick={async () => {
                  setSelectedNum(i + 1)
                }}
              />
            </StaringWrap>
          )
        })}
      </div>
    </>
  )
}

const toArray = (count: number) => {
  return Array.from({ length: count }, (_, i) => i + 1)
}

export default Starin
