
import { defaultStore, useStore } from 'components/StoreProvider/StoreProvider';
import Food from './Food/Food';

import styles from './Life.module.scss';
import Animal from './Animal/Animal';

function Life() {
  const [store, setStore] = useStore();

  const { food } = store;

  const reset = () => {
    setStore(defaultStore);
  }


  return (
    <div>
      <Animal />
      <div className={styles.controls}>
        {food < 10 && (
          <Food />
        )}
        <button onClick={() => reset()}>Сброс</button>
      </div>
    </div>
  )
}

export default Life;
