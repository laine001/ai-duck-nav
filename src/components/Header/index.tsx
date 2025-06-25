import { useState } from "react";
import DrawerMenu from "../DrawerMenu";
import { useTranslation } from "react-i18next";
import logo from "../../assets/aiduck.png";
import "./index.css";

const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
                  <label htmlFor="my-drawer" aria-label="close sidebar">x</label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="bg-white py-2 rounded-xl shadow-md text-center card-hover dark:bg-gray-700"
                  >
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-blue-100 flex items-center justify-center">
                      <i className="fa-solid fa-comment text-primary text-xl"></i>
                    </div>
                    <h4 className="font-medium text-neutral">文本生成</h4>
                    {/* <p className="text-xs text-neutral/60 mt-1">24个工具</p> */}
                  </a>

                  <a
                    href="#"
                    className="bg-white py-2 rounded-xl shadow-md text-center card-hover dark:bg-gray-700"
                  >
                    <div className="w-12 h-12 mx-auto mb-1 rounded-full bg-purple-100 flex items-center justify-center">
                      <i className="fa-solid fa-image text-purple-600 text-xl"></i>
                    </div>
                    <h4 className="font-medium text-neutral">图像生成</h4>
                    {/* <p className="text-xs text-neutral/60 mt-1">32个工具</p> */}
                  </a>

                  <a
                    href="#"
                    className="bg-white py-2 rounded-xl shadow-md text-center card-hover dark:bg-gray-700"
                  >
                    <div className="w-12 h-12 mx-auto mb-1 rounded-full bg-green-100 flex items-center justify-center">
                      <i className="fa-solid fa-video text-green-600 text-xl"></i>
                    </div>
                    <h4 className="font-medium text-neutral">视频编辑</h4>
                    {/* <p className="text-xs text-neutral/60 mt-1">18个工具</p> */}
                  </a>

                  <a
                    href="#"
                    className="bg-white py-2 rounded-xl shadow-md text-center card-hover dark:bg-gray-700"
                  >
                    <div className="w-12 h-12 mx-auto mb-1 rounded-full bg-amber-100 flex items-center justify-center">
                      <i className="fa-solid fa-music text-amber-600 text-xl"></i>
                    </div>
                    <h4 className="font-medium text-neutral">音频处理</h4>
                    {/* <p className="text-xs text-neutral/60 mt-1">15个工具</p> */}
                  </a>

                  <a
                    href="#"
                    className="bg-white py-2 rounded-xl shadow-md text-center card-hover dark:bg-gray-700"
                  >
                    <div className="w-12 h-12 mx-auto mb-1 rounded-full bg-red-100 flex items-center justify-center">
                      <i className="fa-solid fa-code text-red-600 text-xl"></i>
                    </div>
                    <h4 className="font-medium text-neutral">代码辅助</h4>
                    {/* <p className="text-xs text-neutral/60 mt-1">12个工具</p> */}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder={t("搜索AI工具...")}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/60"
            />
            <i className="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>
      <DrawerMenu onFilter={() => {}} visible={isMobileMenuOpen} />
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
