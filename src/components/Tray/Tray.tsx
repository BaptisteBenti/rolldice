import { useStore } from '../../context/dice/DiceContext'

const Tray = () => {
  const { state, action } = useStore()
  return (
    <div>
      {
        state.roll.map(( rolled, index ) => {
          return (
            <button
              key={ index }
              onClick={ () => action.remove( index ) }
              title='remove the dice from the tray'
            >
              { rolled.score }
            </button>
          )
        })
      }
      <div> total { state.total }</div>
    </div>
   )
}

export default Tray