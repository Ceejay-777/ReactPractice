import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <div className="flex flex-col text-center justify-center items-center h-screen gap-6">
      <p className="text-4xl font-semibold">{count}</p>
      <div className="flex gap-8 items-center border-2 rounded-full p-6 border-green-500">
        <button
          className="w-12 h-12 p-2 border-2 rounded-full border-black text-xl hover:scale-105 flex justify-center items-center"
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <button
          className="w-12 h-12  p-2 border-2 rounded-full border-black text-xl hover:scale-105 flex justify-center items-center"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>

        <button
          className="min-w-12 min-h-12 p-2 border-2 rounded-full border-black text-xl hover:scale-105 flex justify-center items-center"
          onClick={resetAll}
        >
          Reset
        </button>

        <button
          className="min-w-12 min-h-12 p-4 border-2 rounded-full border-black text-xl hover:scale-105 flex justify-center items-center"
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add amount
        </button>
      </div>
      <div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(event) => setIncrementAmount(event.target.value)}
          className="border-2 p-2 px-4 rounded-full border-black text-xl"
        />
      </div>
    </div>
  );
};

export default Counter;
