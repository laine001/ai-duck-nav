import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { faArrowUp, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FloatMenu: React.FC = () => {
  const { i18n } = useTranslation();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      typeof window !== "undefined" &&
      window.localStorage.getItem("darkMode") === "true"
    );
  });
  useEffect(() => {
    if (typeof document !== "undefined") {
      const html = document.documentElement;
      if (isDarkMode) {
        html.classList.add("dark");
        // html.setAttribute("data-theme", "dark");
      } else {
        html.classList.remove("dark");
        // html.setAttribute("data-theme", "");
      }
      if (typeof window !== "undefined") {
        window.localStorage.setItem("darkMode", isDarkMode.toString());
      }
    }
  }, [isDarkMode]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "zh" : "en");
  };

  return (
    <div className="fixed bottom-10 right-4 z-50">
      <div className="dropdown dropdown-hover dropdown-top dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-circle bg-base-200 dark:bg-gray-800 dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 shadow-sm p-2 gap-2  dark:bg-indigo-200 dark:text-white"
        >
          <li>
            <button onClick={scrollToTop} className="btn btn-circle">
              <FontAwesomeIcon className="text-red text-xl" icon={faArrowUp} />
            </button>
          </li>
          <li>
            <button className="btn btn-circle" onClick={toggleDarkMode}>
              <FontAwesomeIcon className="text-red text-xl" icon={faCircleHalfStroke} />
            </button>
          </li>
          <li>
            <button
              onClick={changeLanguage}
              className="btn btn-circle"
            >
              {/* 这里需要添加中英文切换的图标 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12 18a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FloatMenu;
