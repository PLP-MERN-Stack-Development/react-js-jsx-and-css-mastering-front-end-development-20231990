import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 dark:bg-gray-900 text-white">
      <h1 className="text-xl font-semibold">My React App</h1>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
