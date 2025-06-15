import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa";

const SettingsMenu = ({ theme, setTheme, language, setLanguage }) => {
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  const changeLang = (lang) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      >
        <FiSettings size={20} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-3 z-50">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
            {theme === "light" ? "Dark mode" : "Light mode"}
          </button>
          <hr className="my-2 border-gray-300 dark:border-gray-700" />
          <div className="flex flex-col">
            <span className="flex items-center gap-2 text-sm font-medium mb-1">
              <FaGlobe /> Language
            </span>
            <button
              onClick={() => changeLang("uz")}
              className={`p-1 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded ${
                language === "uz" ? "font-bold" : ""
              }`}
            >
              O‘zbekcha
            </button>
            <button
              onClick={() => changeLang("ru")}
              className={`p-1 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded ${
                language === "ru" ? "font-bold" : ""
              }`}
            >
              Русский
            </button>
            <button
              onClick={() => changeLang("en")}
              className={`p-1 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded ${
                language === "en" ? "font-bold" : ""
              }`}
            >
              English
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsMenu;
