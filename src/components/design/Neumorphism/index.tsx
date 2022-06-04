import classes from './_classes.css'

export interface NeumorphismProps {
  isActive?: boolean
}

export const Neumorphism = ({ isActive: active }: NeumorphismProps) => (
  <div className={classes.wrapper({ active })} />
)
