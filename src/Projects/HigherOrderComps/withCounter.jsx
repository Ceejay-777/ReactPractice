import { useState } from "react";

const withCounter = (WrappedComp, incNum) => {
  return function WithCounter(props) {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + incNum);
    };
    return (
      <WrappedComp {...props} count={count} incrementCount={incrementCount} />
    );
  };
};

export default withCounter;
