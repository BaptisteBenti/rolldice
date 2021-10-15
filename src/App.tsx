import { useEffect } from 'react'
import { useStore } from './context/dice/DiceContext'
import Tray from './components/Tray/Tray'
import Box from './components/Box/Box'

import './App.css';

function App() {

  const { state, action } = useStore()

  useEffect( () => {
    action.total()
  }, [ state.roll ])

  return (
    <div className="App">
      <div className="App-header">
        <Tray/>
        <Box/>
      </div>
    </div>
  );
}

export default App;