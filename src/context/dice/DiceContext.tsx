import { createContext, useContext, useReducer } from 'react'
import DiceReducer from './reducer'
import createActions from './createActions'

export const DiceContext = createContext( {} as IContextProps )
export const useStore = () => useContext( DiceContext )

export const initialState:IState = {
  dice: [ 4,6,8,10,12,20 ],
  roll: [],
  modifier: 0,
  total: 0
}

export const DiceProvider = ( props: IProviderProps ) => {
  const [ state, dispatch ] = useReducer( DiceReducer, initialState )
  const action = createActions( state, dispatch )
  return (
    <DiceContext.Provider value={{ state, action }}>
      { props.children }
    </DiceContext.Provider>
  )
}

export interface IState {
  dice: number[]
  roll: {
    dice: number
    score: number
  }[]
  modifier: number
  total: number
}

export type TAction =
| { type: "roll" ; payload: number }
| { type: "remove" ; payload: number }
| { type: "reroll" }
| { type: "reset" }
| { type: "total" ; payload: number }

interface IContextProps {
  state: IState
  action: {
    roll: ( value: number ) => void
    remove: ( value: number ) => void
    reroll: () => void
    reset: () => void
    total: () => void
  }
}

interface IProviderProps {
  children: React.ReactNode
}
