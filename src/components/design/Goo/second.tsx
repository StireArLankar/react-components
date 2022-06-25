import classes from './_classes.css'

export const Second = () => (
  <>
    <div className={classes.blobs}>
      <div className={classes.blob({ pos: 'leftTop' })}>4</div>
      <div className={classes.blob({ pos: 'rightTop' })}>3</div>
      <div className={classes.blob({ pos: 'rightTop' })}>2</div>
      <div className={classes.blob({ pos: 'leftBottom' })}>1</div>
    </div>

    <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
      <defs>
        <filter id='goo'>
          <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
          <feColorMatrix
            in='blur'
            mode='matrix'
            values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
            result='goo'
          />
          <feBlend in='SourceGraphic' in2='goo' />
        </filter>
      </defs>
    </svg>
  </>
)
