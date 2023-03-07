import cat from 'assets/cat.png';
import goose from 'assets/goose.png';
import { useStore } from '../StoreProvider/StoreProvider';

function Life() {
  const [store, setStore] = useStore();

  const { animal } = store;
  const animalSrc = animal == 'cat' ? cat : goose;

  return (
    <div>
        <img src={animalSrc} alt="Питомец" />
    </div>
  )
}

export default Life;
