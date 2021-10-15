import { useStore } from "../../context/dice/DiceContext"

const Box = () => {
  const { state, action } = useStore()
  return (
    <div>
      {
        state.dice.map(( dice, index ) => {
          return (
            <button
              key={ index }
              onClick={ () => action.roll( dice ) }
              title={ `roll a d${dice}` }
            >
              { dice }
            </button>
          )
        })
      }
      <div>
      <button onClick={ () => action.reroll() } data-type="reroll" > reroll </button>
      <button onClick={ () => action.reset() } data-type="reset" > reset </button>
      </div>
    </div>
  )
}

export default Box