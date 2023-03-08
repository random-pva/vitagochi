import { defaultStore, useStore } from '../../StoreProvider/StoreProvider';
import clsx from 'clsx';

import strawberry from 'assets/strawberry.png';

import styles from './Food.module.scss';
import { cloneElement, useRef } from 'react';

function Food() {
  const [store, setStore] = useStore();

  const { food } = store;

  const ref = useRef<HTMLDivElement>(null);

  const feed = () => {
    if (food < 10) {
      setStore({ ...store, food: food + 1 });
      const newEl = ref.current?.cloneNode(true) as HTMLDivElement;
      if (newEl) {
        newEl.className += ` ${styles.show}`;
        newEl.style.transition = 'transform 0.5s linear';
        ref.current?.parentNode?.appendChild(newEl);
        setTimeout(() => {newEl.style.transform = `translateY(-200px)`}, 0);
        setTimeout(() => {ref.current?.parentNode?.removeChild(newEl)}, 500);
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={clsx(styles.food, styles.animation)} ref={ref}>
        <img src={strawberry} className={styles.foodImage} alt="Еда" />
      </div>
      <button className={clsx('select-item', styles.food)} onClick={() => feed()}>
        <img src={strawberry} className={styles.foodImage} alt="Еда" />
      </button>
    </div>
  )
}

export default Food;
