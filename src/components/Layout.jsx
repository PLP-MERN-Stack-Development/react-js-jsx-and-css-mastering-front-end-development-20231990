import React, { useState } from "react";

// =========================
// Layout Component
// Wraps all tasks with header, footer, and navigation
// =========================
function Layout() {
  // =========================
  // State to track which task is active
  // =========================
  const [activeTask, setActiveTask] = useState("task1");

  // =========================
  // Task 1 Component
  // =========================
  const Task1 = () => (
    <div className="p-4 bg-gray-100 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Task 1</h2>
      <p>This is Task 1 content. You can add any JSX here.</p>
    </div>
  );

  // =========================
  // Task 2 Component - Counter Example
  // =========================
  const Task2 = () => {
    const [count, setCount] = useState(0);
    return (
      <div className="p-4 bg-gray-100 rounded shadow mb-4">
        <h2 className="text-xl font-bold mb-2">Task 2 - Counter</h2>
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
  };

  // =========================
  // Task 3 Component - Simple Form
  // =========================
  const Task3 = () => {
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Hello, ${name}!`);
    };
    return (
      <div className="p-4 bg-gray-100 rounded shadow mb-4">
        <h2 className="text-xl font-bold mb-2">Task 3 - Form</h2>
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
  };

  // =========================
  // Task 4 Component - List Rendering
  // =========================
  const Task4 = () => {
    const fruits = ["Apple", "Banana", "Orange", "Mango"];
    return (
      <div className="p-4 bg-gray-100 rounded shadow mb-4">
        <h2 className="text-xl font-bold mb-2">Task 4 - List</h2>
        <ul className="list-disc list-inside">
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  };

  // =========================
  // Task 5 Component - Dark Mode Toggle
  // =========================
  const Task5 = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
      <div
        className={`p-4 rounded shadow mb-4 ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <h2 className="text-xl font-bold mb-2">Task 5 - Dark Mode</h2>
        <p>Toggle dark mode below:</p>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    );
  };

  // =========================
  // Function to render the active task
  // =========================
  const renderTask = () => {
    switch (activeTask) {
      case "task1":
        return <Task1 />;
      case "task2":
        return <Task2 />;
      case "task3":
        return <Task3 />;
      case "task4":
        return <Task4 />;
      case "task5":
        return <Task5 />;
      default:
        return <Task1 />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* =========================
          Header and Navigation
      ========================= */}
      <header className="bg-blue-500 text-white p-4">
        <nav className="flex gap-4">
          <button onClick={() => setActiveTask("task1")}>Task 1</button>
          <button onClick={() => setActiveTask("task2")}>Task 2</button>
          <button onClick={() => setActiveTask("task3")}>Task 3</button>
          <button onClick={() => setActiveTask("task4")}>Task 4</button>
          <button onClick={() => setActiveTask("task5")}>Task 5</button>
        </nav>
      </header>

      {/* =========================
          Main Content
      ========================= */}
      <main className="flex-1 p-4">{renderTask()}</main>

      {/* =========================
          Footer
      ========================= */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2025 React App - All Tasks
      </footer>
    </div>
  );
}

export default Layout;
