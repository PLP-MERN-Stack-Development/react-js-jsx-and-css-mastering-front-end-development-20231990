import React, { useState, useEffect } from "react";

// ✅ Custom hook for saving to localStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default function Counter() {
  const [count, setCount] = useLocalStorage("count", 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold mb-4">React Counter App ⚛️</h1>
      <p className="text-xl mb-6">Current Count: {count}</p>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
