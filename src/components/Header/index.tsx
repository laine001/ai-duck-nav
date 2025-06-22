import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300 dark:bg-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <i className="fa-solid fa-robot text-white"></i>
          </div>
          <h1 className="text-xl font-bold gradient-text">AI工具箱</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {/* <a
            href="#"
            className="text-neutral hover:text-primary transition-colors"
          >
            首页
          </a>
          <a
            href="#"
            className="text-neutral hover:text-primary transition-colors"
          >
            工具分类
          </a>
          <a
            href="#"
            className="text-neutral hover:text-primary transition-colors"
          >
            热门推荐
          </a> */}
          {/* <a
            href="#"
            className="text-neutral hover:text-primary transition-colors"
          >
            关于我们
          </a> */}
        </nav>

        <div className="flex items-center space-x-4">
          <button className="md:hidden text-neutral hover:text-primary transition-colors">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder={t('搜索AI工具...')}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/60"
            />
            <i className="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
