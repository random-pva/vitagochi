import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import { useStore } from 'components/StoreProvider/StoreProvider';
import SelectAnimal from 'components/SelectAnimal/SelectAnimal';
import Life from 'components/Life/Life';


function Game() {
  const [store, setStore] = useStore();

  const { animal } = store;

  return (
    <div>
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        {(animal ? <Life /> : <SelectAnimal />)}
      </DndProvider>
    </div>
  )
}

export default Game;
