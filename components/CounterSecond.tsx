'use client';
import { observer } from 'mobx-react-lite';
import { useStore } from './StoreProvider';

const CounterSecond = observer(() => {
  const { secondStore } = useStore();

  const drawCounter = () => (
    <div className="h-56 w-56 flex flex-col justify-between items-center bg-white rounded-lg border border-[#33333350]">
      <div className="p-2 text-center">
        <h1>SecondStore.counter</h1>
        <h3>Server</h3>
      </div>
      <div className="w-full h-full flex justify-between items-center px-8">
        {/* decrement */}
        <button className="btn" onClick={() => secondStore.setDecrement()}>
          -
        </button>
        {/* count */}
        <span className="font-bold font-mono text-lg">{secondStore.count}</span>
        {/* increment */}
        <button className="btn" onClick={() => secondStore.setIncrement()}>
          +
        </button>
      </div>
    </div>
  );

  return <div>{drawCounter()}</div>;
});

export default CounterSecond;
