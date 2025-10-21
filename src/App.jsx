import React, { useState } from "react";

// =========================
// Task 1 Component
// =========================
function Task1() {
  return (
    <div className="p-4 bg-gray-100 rounded shadow mb-4">
      <h2 className="text-xl font-bold">Task 1</h2>
      <p>This is Task 1 content.</p>
    </div>
  );
}

// =========================
// Task 2 Component
// =========================
function Task2() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-gray-100 rounded shadow mb-4">
      <h2 className="text-xl font-bold">Task 2 - Counter</h2>
      <p>Current count: {count}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded mr-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

// =========================
// Task 3 Component
// =========================
function Task3() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow mb-4">
      <h2 className="text-xl font-bold">Task 3 - Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded mr-2"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// =========================
// Task 4 Component
// =========================
function Task4() {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  return (
    <div className="p-4 bg-gray-100 rounded shadow mb-4">
      <h2 className="text-xl font-bold">Task 4 - List</h2>
      <ul className="list-disc list-inside">
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// =========================
// Task 5 Component
// =========================
function Task5() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`p-4 rounded shadow mb-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2 className="text-xl font-bold">Task 5 - Dark Mode</h2>
      <p>This is Task 5 content with Dark Mode toggle.</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

// =========================
// Main App Component
// =========================
function App() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">React App - All Tasks Displayed</h1>

      {/* Render all tasks */}
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />
    </div>
  );
}

export default App;
