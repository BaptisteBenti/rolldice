import { IState, TAction } from './DiceContext'

const createActions = (
  state: IState,
  dispatch: ( action: TAction ) => void
) => {
  return {
    roll: ( value: number ) => {
      dispatch({ type: 'roll', payload: value })
    },
    remove: ( value: number ) => {
      dispatch({ type: 'remove', payload: value })
    },
    reroll: () => {
      dispatch({ type: 'reroll' })
    },
    reset: () => {
      dispatch({ type: 'reset' })
    },
    total: () => {
      const scores = state.roll.map( dice => dice.score )
      const total = scores.length ? scores.reduce(( a, b) => a + b ) : 0
      dispatch({ type: 'total', payload: total })
    },
  }
}

export default createActions