import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
      <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
      <p className="mt-1">
        Built with <span className="text-blue-500 dark:text-blue-400">React + Tailwind CSS</span>
      </p>
    </footer>
  );
}
