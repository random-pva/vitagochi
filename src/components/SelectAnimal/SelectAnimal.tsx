import cat from 'assets/cat.png';
import goose from 'assets/goose.png';
import { useStore } from '../StoreProvider/StoreProvider';

function SelectAnimal() {
  const [store, setStore] = useStore();

  const selectAnimal = (animal: string) =>{
    setStore({...store, animal })
  }

  return (<>
    <div>
      <h1>Выберите питомца</h1>
      <button className="select-item" onClick={() => selectAnimal('cat')}>
        <img src={cat} className="logo react" alt="React logo" />
      </button>
      <button className="select-item" onClick={() => selectAnimal('goose')}>
        <img src={goose} className="logo react" alt="React logo" />
      </button>
    </div>
    <footer id="footer">
      <div>&copy; Random for kids</div>
      <a href="https://www.flaticon.com/free-icons/goose" title="goose icons">Goose icons created by Smashicons - Flaticon</a><br />
      <a href="https://www.flaticon.com/free-icons/cat" title="cat icons">Cat icons created by Freepik - Flaticon</a><br />
      <a href="https://www.flaticon.com/free-icons/strawberry" title="strawberry icons">Strawberry icons created by juicy_fish - Flaticon</a>
    </footer>
  </>)
}

export default SelectAnimal;
