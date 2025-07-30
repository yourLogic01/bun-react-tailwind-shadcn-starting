import type { C } from "node_modules/tailwindcss/dist/resolve-config-QUZ9b-Gn.d.mts";
import React, { useState } from "react";

type CounterComponentProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};
export const CounterComponent: React.FC<CounterComponentProps> = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
        Counter: <span className="text-primary">{count}</span>
      </h2>
      <div className="flex gap-4">
        <button onClick={onDecrement} className="w-12 h-12 rounded-md bg-red-500 text-white text-xl font-bold hover:bg-red-600 transition">
          -
        </button>
        <button onClick={onIncrement} className="w-12 h-12 rounded-md bg-blue-500 text-white text-xl font-bold hover:bg-blue-600 transition">
          +
        </button>
      </div>
    </div>
  );
};
