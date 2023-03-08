import { useDrag } from 'react-dnd';
import strawberry from 'assets/strawberry.png';

import styles from './Food.module.scss';
import { defaultStore, useStore } from '../../StoreProvider/StoreProvider';

type DropResult = {
  name: string;
}

function Food() {
  const [store, setStore] = useStore();

  const { food } = store;

  const feed = () => {
    if (food < 10) {
      setStore({ ...store, food: food + 1 });
    }
  }


  const [{}, dragRef] = useDrag(
    () => ({
      type: 'food',
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult<DropResult>()
        if (dropResult?.name == 'animal') {
          feed();
        }
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    [ food ]
  );

  return (
    <div className={styles.food} ref={dragRef}>
      <img src={strawberry} className={styles.foodImage} alt="Еда" />
    </div>
  )
}

export default Food;
