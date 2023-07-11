import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div>
      <div className="m-5 flex items-center gap-3">
        <button
          className="ring-2 ring-green-500 rounded p-1"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="ring-2 ring-green-500 rounded p-1"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by value
        </button>
        <div>{count}</div>
        <button
          className="ring-2 ring-red-500 rounded p-1"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
