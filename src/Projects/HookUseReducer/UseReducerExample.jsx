import React, { useEffect, useReducer, useRef, useState } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "increase": {
      const incCount = state.count + 1;
      const hasError = incCount > 5;
      return {
        ...state,
        count: hasError ? state.count : incCount,
        error: hasError ? "Max Value Reached" : null,
      };
    }

    case "decrease": {
      const decCount = state.count - 1;
      const hasError = decCount < 0;
      return {
        ...state,
        count: hasError ? state.count : decCount,
        error: hasError ? "Min Value Reached" : null,
      };
    }

    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0, error: null });

  return (
    <div className="w-screen h-screen bg-green-800 flex items-center justify-center gap-6 flex-col">
      <div className="flex items-center justify-center gap-6">
        <button
          className="w-12 h-12 text-yellow-400 border-2 border-yellow-400 rounded-full text-xl hover:scale-105 flex justify-center items-center"
          onClick={() => dispatch({ type: "increase" })}
        >
          +
        </button>
        <p className="text-white text-2xl">{state.count}</p>
        <button
          className="w-12 h-12 border-2 rounded-full text-yellow-400 border-yellow-400 text-xl hover:scale-105 flex justify-center items-center"
          onClick={() => dispatch({ type: "decrease" })}
        >
          -
        </button>
      </div>
      {state.error && <div className="text-red-500 text-xl">{state.error}</div>}
    </div>
  );
};

export default UseReducerExample;
