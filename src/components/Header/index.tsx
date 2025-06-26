// import { useState } from "react";
// import DrawerMenu from "../DrawerMenu";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import CategoryMenu from "../CategoryMenu";

import logo from "../../assets/aiduck.png";
import "./index.css";

interface IHeaderProps {
  onFilterCategory?: (categoryCode: string) => void;
  onSearchTool?: (searchText: string) => void;
}

const Header = (props: IHeaderProps) => {
  const { t } = useTranslation();
  const { onFilterCategory = () => {}, onSearchTool } = props;
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTool?.(e.target.value);
  };
  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300 dark:bg-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            {/* <i className="fa-solid fa-robot text-white"></i> */}
            <img className="logo-animation" src={logo} alt="" />
          </div>
          <h1 className="text-xl font-bold gradient-text">
            AIDuck
            <span>{t("工具箱")}</span>
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="drawer drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="drawer-button md:hidden hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block cursor-pointer w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <div className="flex justify-between pb-4">
                  <div> </div>
                  <label
                    htmlFor="my-drawer"
                    className="w-10 h-10 rounded-xl transition-all flex justify-center items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
                    aria-label="close sidebar"
                  >
                    <FontAwesomeIcon icon={faClose} className="text-xl" />
                  </label>
                </div>
                <CategoryMenu mini onFilterCategory={onFilterCategory} />
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder={t("搜索AI工具...")}
              onChange={onInputChange}
              className="transition-all pl-10 pr-4 py-2 w-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:w-60"
            />
            <i className="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>
      {/* <DrawerMenu onFilter={() => {}} visible={isMobileMenuOpen} /> */}
      {/* <nav
        className={
          isMobileMenuOpen
            ? "block md:hidden flex align-end pr-6 pb-3 flex-col"
            : "hidden"
        }
      >
      </nav> */}
    </header>
  );
};

export default Header;
