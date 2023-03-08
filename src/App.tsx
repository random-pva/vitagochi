import { useState } from 'react'
import './App.css'
import { StoreProvider } from 'components/StoreProvider/StoreProvider';
import Game from 'components/Game/Game';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <StoreProvider>
          <Game />
        </StoreProvider>
      </div>

    </div>
  )
}

export default App
