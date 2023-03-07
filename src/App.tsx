import { useState } from 'react'
import cat from './assets/cat.png'
import goose from './assets/goose.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Выберите питомца</h1>
        <a href="https://reactjs.org" target="_blank">
          <img src={cat} className="logo react" alt="React logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={goose} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <footer id="footer">
        <div>&copy; Random for kids</div>
        <a href="https://www.flaticon.com/free-icons/goose" title="goose icons">Goose icons created by Smashicons - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/cat" title="cat icons">Cat icons created by Freepik - Flaticon</a>
      </footer>
    </div>
  )
}

export default App
