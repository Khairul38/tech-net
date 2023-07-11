import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);

  return (
    <div>
      <div className="m-5 flex items-center gap-3">
        <button
          className="ring-2 ring-green-500 rounded p-1"
          onClick={() => dispatch(increment())}
        >
          Increment
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
