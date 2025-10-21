import React from "react";

export default function Button({ variant = "primary", children, onClick }) {
  const base =
    "px-4 py-2 rounded font-semibold transition duration-200 focus:outline-none";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

