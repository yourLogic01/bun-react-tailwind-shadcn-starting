import { useCounterStore } from "@/store/counterStore";
import type { C } from "node_modules/tailwindcss/dist/resolve-config-QUZ9b-Gn.d.mts";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export const CounterComponent: React.FC = () => {
  const { count, inc, dec, reset } = useCounterStore();
  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
        Counter: <span className="text-primary">{count}</span>
      </h2>
      <div className="flex gap-4">
        <Button onClick={dec} className="w-12 h-12 text-xl font-bold">
          -
        </Button>
        <Button onClick={inc} className="w-12 h-12 text-xl font-bold">
          +
        </Button>
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
};
