import { useStore } from 'components/StoreProvider/StoreProvider';
import { useDrop } from 'react-dnd';
import cat from 'assets/cat.png';
import goose from 'assets/goose.png';

import styles from './Animal.module.scss';

function Animal() {
  const [{ animal }] = useStore();

  const animalSrc = animal == 'cat' ? cat : goose;

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'food',
    drop: () => ({ name: 'animal' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <div className={styles.animalImageContainer} ref={drop}>
      <img src={animalSrc} className={styles.animalImage} alt="Питомец" />
    </div>
  )
}

export default Animal;
