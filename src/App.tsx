import { useReducer, useEffect, MouseEvent } from 'react'
import './App.css';

interface IState {
  dice: number[]
  roll: {
    dice: number
    score: number
  }[]
  modifier: number
  total: number
}

type TAction =
| { type: "roll" ; payload: number }
| { type: "remove" ; payload: number }
| { type: "reroll" }
| { type: "reset" }
| { type: "total" ; payload: number }

const initialState:IState = {
  dice: [ 4,6,8,10,12,20 ],
  roll: [],
  modifier: 0,
  total: 0
}

const reducer = ( state: IState, action: TAction ) => {
  switch ( action.type ) {
    case 'roll': return {
      ...state,
      roll: [
        ...state.roll,
        {
          dice: action.payload,
          score: getRand( 1, action.payload )
        }
      ]
    }
    case 'remove': return {
      ...state,
      roll: state.roll.filter(( _, index ) => index !== action.payload )
    }
    case 'reroll': return {
      ...state,
      roll: state.roll.map( rolled => {
        return {
          ...rolled,
          score: getRand( 1, rolled.dice )
        }
      })
    }
    case 'reset': return {
      ...state, roll: []
    }
    case 'total': return {
      ...state, total: action.payload
    }
    default: throw new Error()
  }
}

function App() {

  const [ state, dispatch ] = useReducer( reducer, initialState )

  useEffect( () => {
    const scores = state.roll.map( dice => dice.score )
    dispatch({
      type: 'total',
      payload: scores.length ? scores.reduce(( a, b) => a + b ) : 0
    })
  }, [ state.roll ])

  const handleClick = ( event: MouseEvent<HTMLButtonElement> ):void => {
    event.preventDefault()
    const actionType = ( event.target as HTMLButtonElement ).dataset.type
    const actionPayload = ( event.target as HTMLButtonElement ).dataset.payload
    switch (actionType) {
      case 'roll':
        actionPayload && dispatch({ type: 'roll', payload: +actionPayload })
        break
        case 'remove':
          actionPayload && dispatch({ type: 'remove', payload: +actionPayload })
          break
        case 'reroll':
          dispatch({ type: 'reroll' })
          break
        case 'reset':
          dispatch({ type: 'reset' })
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

function getRand(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}