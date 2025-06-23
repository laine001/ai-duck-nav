import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ModeAndLanguageSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      typeof window !== "undefined" &&
      window.localStorage.getItem("darkMode") === "true"
    );
  });
  const { i18n } = useTranslation();
  useEffect(() => {
    if (typeof document !== "undefined") {
      const html = document.documentElement;
      if (isDarkMode) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
      if (typeof window !== "undefined") {
        window.localStorage.setItem("darkMode", isDarkMode.toString());
      }
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "zh" : "en");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white/50 rounded-lg shadow-lg dark:bg-gray-800 backdrop-blur-md" style={{ borderRadius: 12 }}>
        <div className="flex p-1 items-center space-x-2">
          {/* 夜间模式切换按钮 */}
          <button
            onClick={toggleDarkMode}
            style={{ width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}
            className="p-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isDarkMode ? (
              <i className="fa-solid fa-sun cursor-pointer"></i>
            ) : (
              <i className="fa-solid fa-moon cursor-pointer"></i>
            )}
          </button>
          {/* 语言切换按钮 */}
          <div className="flex space-x-2 cursor-pointer">
            <button
              onClick={() => changeLanguage()}
              style={{ fontSize: 12 }}
              className={`p-1 rounded-lg cursor-pointer ${
                i18n.language === "en"
                  ? ""
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {i18n.language === "zh" ? "EN" : "中文"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeAndLanguageSwitcher;
