import classes from './_classes.css'

export interface IconProps {
  Icon: (props: { className: string }) => JSX.Element
}

export const Icon = (props: IconProps) => (
  <button className={classes.button}>
    <props.Icon className={classes.icon} />
  </button>
)
