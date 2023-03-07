import { useStore } from 'components/StoreProvider/StoreProvider';
import SelectAnimal from 'components/SelectAnimal/SelectAnimal';
import Life from 'components/Life/Life';

function Game() {
  const [store, setStore] = useStore();

  const { animal } = store;

  return (
    <div>
      {(animal ? <Life /> : <SelectAnimal />)}
    </div>
  )
}

export default Game;
