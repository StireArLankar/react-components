import classes from './_classes.css'

export type BubbleSvgProps = {
  onClick: () => void
}

export const BubbleSvg = (props: BubbleSvgProps) => {
  const { onClick } = props

  return (
    <svg viewBox='0 0 200 200' onClick={onClick} className={classes.bubble}>
      <defs>
        {/* <!-- Разноцветный градиент --> */}
        <linearGradient id='gradient--colors' x1='0' y1='100%' x2='100%' y2='0'>
          <stop offset='0%' stopColor='dodgerblue' />
          <stop offset='50%' stopColor='fuchsia' />
          <stop offset='100%' stopColor='yellow' />
        </linearGradient>

        {/* <!-- Градиент прозрачности разноцветного слоя --> */}
        <radialGradient id='gradient--colors-transparency' fx='25%' fy='25%'>
          <stop offset='0%' stopColor='black' />
          <stop offset='30%' stopColor='black' stopOpacity='.2' />
          <stop offset='97%' stopColor='white' stopOpacity='.4' />
          <stop offset='100%' stopColor='black' />
        </radialGradient>

        {/* <!-- Маска прозрачности разноцветного слоя --> */}
        <mask id='mask--colors-transparency'>
          <rect
            fill='url(#gradient--colors-transparency)'
            width='100%'
            height='100%'
          />
        </mask>

        {/* <!-- Градиент для прозрачности --> */}
        <radialGradient id='gradient--bw-light' fy='10%'>
          <stop offset='60%' stopColor='black' stopOpacity='0' />
          <stop offset='90%' stopColor='white' stopOpacity='.25' />
          <stop offset='100%' stopColor='black' />
        </radialGradient>

        {/* <!-- Маска для нижнего отражения --> */}
        <mask id='mask--light-bottom'>
          <rect fill='url(#gradient--bw-light)' width='100%' height='100%' />
        </mask>

        {/* <!-- Маска для верхнего отражения --> */}
        <mask id='mask--light-top'>
          <rect
            fill='url(#gradient--bw-light)'
            width='100%'
            height='100%'
            transform='rotate(180, 100, 100)'
          />
        </mask>

        {/* <!-- Градиент блика --> */}
        <radialGradient id='gradient--spot' fy='20%'>
          <stop offset='10%' stopColor='white' stopOpacity='.7' />
          <stop offset='70%' stopColor='white' stopOpacity='0' />
        </radialGradient>
      </defs>

      {/* <!-- Нижний блик --> */}
      <ellipse
        rx='40'
        ry='20'
        cx='150'
        cy='150'
        fill='url(#gradient--spot)'
        transform='rotate(-225, 150, 150)'
      />

      {/* <!-- Нижнее отражение --> */}
      <circle
        r='50%'
        cx='50%'
        cy='50%'
        fill='aqua'
        mask='url(#mask--light-bottom)'
      />

      {/* <!-- Верхнее отражение --> */}
      <circle
        r='50%'
        cx='50%'
        cy='50%'
        fill='yellow'
        mask='url(#mask--light-top)'
      />

      {/* <!-- Верхний блик --> */}
      <ellipse
        rx='55'
        ry='25'
        cx='55'
        cy='55'
        fill='url(#gradient--spot)'
        transform='rotate(-45, 55, 55)'
      />

      {/* <!-- Фигура с маской и разноцветным градиентом --> */}
      <circle
        r='50%'
        cx='50%'
        cy='50%'
        fill='url(#gradient--colors)'
        mask='url(#mask--colors-transparency)'
      />
    </svg>
  )
}
