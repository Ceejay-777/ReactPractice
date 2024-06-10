import React, { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

const ExampleApplication = () => {
  const { showBoundary } = useErrorBoundary();
  const [isError, setIsError] = useState(false);
  const [count, setCount] = useState(0);

  const handleError = () => {
    if (count >= 3) {
      showBoundary(new Error("This is a custom Error"));
    }
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-green-800">
      <button
        className="py-2 px-4 border-2 rounded-full text-xl animate-bounce text-white"
        onClick={handleError}
      >
        Click me
      </button>
    </div>
  );
};

export default ExampleApplication;
