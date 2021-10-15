import { useStore } from "../../context/dice/DiceContext"
import { createUseStyles } from 'react-jss'
import Dice from '../Dice/Dice'
import Button from '../shared/Buttons/FancyButton'

const Box = () => {
  const { state, action } = useStore()
  const classes = useStyles()
  return (
    <div className={ classes.Box }>
      <div className={ classes.DiceContainer }>
      {
        state.dice.map(( dice, index ) => {
          return (
            <span
            key={ index }
            onClick={ () => action.roll( dice ) }
            title={ `roll a d${dice}` }
            >
            <Dice value={ dice }/>
            </span>
          )
        })
      }
      </div>
      <div>
        <Button onClick={ () => action.reroll() } >reroll</Button>
        <Button onClick={ () => action.reset() } >reset</Button>
      </div>
    </div>
  )
}

export default Box

const useStyles = createUseStyles({
  Box: {
    padding: '1rem',
  },
  DiceContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
})