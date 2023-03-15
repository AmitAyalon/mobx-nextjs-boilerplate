'use client';
import { observer } from 'mobx-react-lite';
import { useStore } from './StoreProvider';

const CounterFirst = observer(() => {
  const { firstStore } = useStore();

  const drawCounter = () => (
    <div className="h-56 w-56 flex flex-col justify-between items-center bg-white rounded-lg border border-[#33333350]">
      <div className="p-2 text-center">
        <h1>firstStore.counter</h1>
        <h3>Client</h3>
      </div>
      <div className="w-full h-full flex justify-between items-center px-8">
        {/* decrement */}
        <button className="btn" onClick={() => firstStore.setDecrement()}>
          -
        </button>
        {/* count */}
        <span className="font-bold font-mono text-lg">{firstStore.count}</span>
        {/* increment */}
        <button className="btn" onClick={() => firstStore.setIncrement()}>
          +
        </button>
      </div>
    </div>
  );

  return <div>{drawCounter()}</div>;
});

export default CounterFirst;
