import React, { useState } from "react";

export const CounterComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
        Counter: <span className="text-primary">{count}</span>
      </h2>
      <div className="flex gap-4">
        <button onClick={decrement} className="w-12 h-12 rounded-md bg-red-500 text-white text-xl font-bold hover:bg-red-600 transition">
          -
        </button>
        <button onClick={increment} className="w-12 h-12 rounded-md bg-blue-500 text-white text-xl font-bold hover:bg-blue-600 transition">
          +
        </button>
      </div>
    </div>
  );
};
