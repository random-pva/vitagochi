import { useStore } from 'components/StoreProvider/StoreProvider';
import cat from 'assets/cat.png';
import goose from 'assets/goose.png';

import styles from './Animal.module.scss';

function Animal() {
  const [{ animal }] = useStore();

  const animalSrc = animal == 'cat' ? cat : goose;


  return (
    <div className={styles.animalImageContainer}>
      <img src={animalSrc} className={styles.animalImage} alt="Питомец" />
    </div>
  )
}

export default Animal;
