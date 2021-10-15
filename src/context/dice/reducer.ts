import { IState, TAction } from './DiceContext'
import { getRandomIntInclusive as getRand } from '../../utils/helpers/getRandomIntInclusive'

const DiceReducer = ( state: IState, action: TAction ) => {
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

export default DiceReducer