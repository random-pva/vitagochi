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

      <footer id="footer">
        <div>&copy; Random for kids</div>
        <a href="https://www.flaticon.com/free-icons/goose" title="goose icons">Goose icons created by Smashicons - Flaticon</a>&nbsp;
        <a href="https://www.flaticon.com/free-icons/cat" title="cat icons">Cat icons created by Freepik - Flaticon</a>
      </footer>
    </div>
  )
}

export default App
