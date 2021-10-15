import { useStore } from '../../context/dice/DiceContext'
import { createUseStyles } from 'react-jss'
import Dice from '../Dice/Dice'

const Tray = () => {
  const { state, action } = useStore()
  const classes = useStyles()
  return (
    <div className={ classes.Tray }>
      <div className={ classes.DiceContainer }>
        {
          state.roll.map(( rolled, index ) => {
            return (
              <span
                key={ index }
                onClick={ () => action.remove( index ) }
                title='remove the dice from the tray'
                className={ classes.Dice }
              >
                <Dice
                  value={ rolled.dice }
                  score={ rolled.score }
                />
              </span>
            )
          })
        }
      </div>
      <div className={ classes.Total }>
        total <span>{ state.total }</span>
      </div>
    </div>
   )
}

export default Tray

const useStyles = createUseStyles({
  Tray: {
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "1rem",
    boxSizing: "border-box",
    width: "100%",
    height: "256px",
    position: "relative",
  },
  DiceContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
    height: '100%',
    overflowY: "scroll",
  },
  Dice: {
    flex: 'auto',
  },
  Total: {
    position: "absolute",
    color: "#282c34",
    bottom: "1rem",
    right: "1rem",
    '& span': {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    }
  },
})