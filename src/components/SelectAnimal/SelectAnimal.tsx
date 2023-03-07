import cat from 'assets/cat.png';
import goose from 'assets/goose.png';
import { useStore } from '../StoreProvider/StoreProvider';

function SelectAnimal() {
  const [store, setStore] = useStore();

  const selectAnimal = (animal: string) =>{
    setStore({...store, animal })
  }

  return (
    <div>
      <h1>Выберите питомца</h1>
      <button className="select-animal" onClick={() => selectAnimal('cat')}>
        <img src={cat} className="logo react" alt="React logo" />
      </button>
      <button className="select-animal" onClick={() => selectAnimal('goose')}>
        <img src={goose} className="logo react" alt="React logo" />
      </button>
    </div>
  )
}

export default SelectAnimal;
