import { useEffect } from 'react'
import { useStore } from './context/dice/DiceContext'
import { createUseStyles } from 'react-jss'
import Tray from './components/Tray/Tray'
import Box from './components/Box/Box'

const App = () => {

  const classes = useStyles()
  const { state, action } = useStore()

  useEffect( () => {
    action.total()
  }, [ state.roll ])

  return (
    <div className={ classes.App }>
      <div className={ classes.Container }>
        <h1>Roll dice</h1>
        <Tray/>
        <Box/>
      </div>
    </div>
  );
}

export default App;

const useStyles = createUseStyles({
  App: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  Container: {
    width: "768px",
    border: ['1px', 'solid', 'rgba(255,255,255,.8)'],
    borderRadius: 15,
  }
})