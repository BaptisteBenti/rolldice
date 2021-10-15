import { useReducer, useEffect, MouseEvent, useContext } from 'react'
import { DiceContext } from './context/dice/DiceContext'
import './App.css';

function App() {

  const { state, action } = useContext( DiceContext )

  useEffect( () => {
    action.total()
  }, [ state.roll ])

  const handleClick = ( event: MouseEvent<HTMLButtonElement> ):void => {
    event.preventDefault()
    const actionType = ( event.target as HTMLButtonElement ).dataset.type
    const actionPayload = ( event.target as HTMLButtonElement ).dataset.payload
    switch (actionType) {
      case 'roll':
        actionPayload && action.roll( +actionPayload )
        break
      case 'remove':
        actionPayload && action.remove( +actionPayload )
        break
      case 'reroll':
        action.reroll()
        break
      case 'reset':
        action.reset()
        break
      default:
        break
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <div> {/** TRAY */}
          {
            state.roll.map(( rolled, index ) => {
              return (
                <button
                  key={ index }
                  onClick={ handleClick }
                  data-type='remove'
                  data-payload={ index }
                  title='remove the dice from the tray'
                >
                  { rolled.score }
                </button>
              )
            })
          }
          <div> total: { state.total }</div>
        </div>
        <div> {/** BOX */}
          {
            state.dice.map(( dice, index ) => {
              return (
                <button
                  key={ index }
                  onClick={ handleClick }
                  data-type='roll'
                  data-payload={ dice }
                  title={ `roll a d${dice}` }
                >
                  { dice }
                </button>
              )
            })
          }
          <div>
          <button onClick={ handleClick } data-type="reroll" > reroll </button>
          <button onClick={ handleClick } data-type="reset" > reset </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;