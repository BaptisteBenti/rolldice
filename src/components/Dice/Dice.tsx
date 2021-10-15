import { createUseStyles } from 'react-jss'
import { dice } from '../../assets/images/dice/index'

export interface IDiceProps {
  value: number
  score?: number
}

const Dice = ( props: IDiceProps ) => {
  const classes = useStyles( props )
  return (
    <button
      className={ classes.Dice }
    >
      { props.score ? props.score : props.value }
    </button>
  )
}

export default Dice

const useStyles = createUseStyles<string, IDiceProps>({
  Dice: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.3rem",
    border: "none",
    padding: "1.5rem",
    paddingBottom: "1.2rem",
    margin: "0",
    cursor: "pointer",
    minWidth: 72,
    minHeight: 72,
    width: '100%',
    height: '100%',

    background: ({ value }) => {
      let bg
      dice[ value ]
      ? bg = `url(${dice[ value ]}) no-repeat center/contain local`
      : bg = "#121c24"
      return bg
    }
  }
})