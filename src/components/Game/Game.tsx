import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useStore } from 'components/StoreProvider/StoreProvider';
import SelectAnimal from 'components/SelectAnimal/SelectAnimal';
import Life from 'components/Life/Life';

function Game() {
  const [store, setStore] = useStore();

  const { animal } = store;

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        {(animal ? <Life /> : <SelectAnimal />)}
      </DndProvider>
    </div>
  )
}

export default Game;
