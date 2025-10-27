import { Sun, Moon } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`sticky top-0 z-50 shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-emerald-500">Sujita Regmi</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-emerald-500">Home</a></li>
          <li><a href="#about" className="hover:text-emerald-500">About</a></li>
          <li><a href="#projects" className="hover:text-emerald-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-emerald-500">Contact</a></li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-emerald-100 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}
