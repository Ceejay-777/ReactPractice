import React, { useState } from "react";

const Renderprop = () => {
  return (
    <div>
      <Parent
        render={(count, handleIncrement) => {
          return <Counter1 count={count} handleIncrement={handleIncrement} />;
        }}
      />

      <Parent
        render={(count, handleIncrement) => {
          return <Counter2 count={count} handleIncrement={handleIncrement} />;
        }}
      />
    </div>
  );
};

const Parent = ({ render }) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);

  return <div>{render(count, handleIncrement)}</div>;
};

const Counter1 = ({ count, handleIncrement }) => {
  return (
    <div
      onClick={() => handleIncrement()}
      style={{
        border: "2px solid blue",
        padding: "8px",
        width: "fit-content",
        borderRadius: "6px",
      }}
    >
      {count}
    </div>
  );
};

const Counter2 = ({ count, handleIncrement }) => {
  return (
    <div
      onClick={() => handleIncrement()}
      style={{
        border: "2px solid red",
        padding: "8px",
        width: "fit-content",
        borderRadius: "6px",
      }}
    >
      {count}
    </div>
  );
};

export default Renderprop;
