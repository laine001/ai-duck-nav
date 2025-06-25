// src/pages/Home.jsx
import { useState } from "react";
import ToolCard from "../../components/ToolCard";
import CategoryTabs from "../../components/CategoryTabs";
import WeekRecommend from "../../components/WeekRecommend";
import { aiNavData } from "@/libs/nav-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import type { INavListItemType, INavDataType } from "@/types/interface";
import { categoryMap } from "../../libs/const";

const Home = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSimpleCard, setIsSimpleCard] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState<any | null>(null);
  // useEffect(() =>{
  //   const html = document.querySelector("html");
  //   console.log(html, 'html')
  //   html?.classList.add("dark"); // 添加 dark 类以启用 dark mo
  //   html?.setAttribute("data-theme", "dark");
  // }, [])
  const toggleCardStyle = () => {
    setIsSimpleCard(!isSimpleCard);
  };
  // 过滤工具
  const filteredTools =
    activeCategory === "all"
      ? aiNavData
      : aiNavData.filter((tool) => tool.categoryCode === activeCategory);

  // 分类数据
  const categories = Object.keys(categoryMap).map((code) => ({
    code,
    name: categoryMap[code as keyof typeof categoryMap],
  }));

  return (
    <main className="container mx-auto px-4 py-8">
      {/* 英雄区域 */}
      <section className="mb-16 text-center">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6 gradient-text">
          {t("探索人工智能的无限可能")}
          {/*  */}
        </h2>
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-neutral/80 max-w-3xl mx-auto mb-8 dark:text-white">
          {t(
            "发现并使用这些精心挑选的AI工具，提升你的工作效率和创造力，探索AI的无限可能！"
          )}
        </p>

        {/* 搜索框（移动端） */}
        <div className="md:hidden relative mb-8">
          <input
            type="text"
            placeholder={t('搜索AI工具...')}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <i className="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700 dark:text-white">
            <div className="text-3xl font-bold text-primary mb-2 dark:text-white">
              100+
            </div>
            <div className="text-neutral/70 dark:text-white">{t("AI工具")}</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700 dark:text-white">
            <div className="text-3xl font-bold text-secondary mb-2 dark:text-white">
              20+
            </div>
            <div className="text-neutral/70 dark:text-white">
              {t("工具分类")}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700 dark:text-white">
            <div className="text-3xl font-bold text-accent mb-2 dark:text-white">
              1000+
            </div>
            <div className="text-neutral/70 dark:text-white">
              {t("活跃用户")}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700 dark:text-white">
            <div className="text-3xl font-bold text-green-500 mb-2 dark:text-white">
              {t("每日更新")}
            </div>
            <div className="text-neutral/70 dark:text-white">
              {t("不断添加新工具")}
            </div>
          </div>
        </div>
      </section>

      {/* 工具分类 */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <h3 className="text-2xl font-bold text-neutral mr-2 dark:text-white">
              工具分类
            </h3>
            <FontAwesomeIcon
              icon={isSimpleCard ? faList : faBars}
              className="cursor-pointer hover:text-gray-600"
              onClick={toggleCardStyle}
            />
          </div>
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* AI工具卡片网格 */}
        {filteredTools.map((item: INavDataType) => {
          return (
            <>
              <div className="text-xl my-4">{item.categoryName}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {item.list.map((tool: INavListItemType, index: number) => (
                  <ToolCard
                    {...tool}
                    key={index}
                    categoryCode={item.categoryCode}
                    categoryName={item.categoryName}
                    isSimple={isSimpleCard}
                  />
                ))}
              </div>
            </>
          );
        })}

        {/* 加载更多按钮 */}
        <div className="text-center mt-10">
          <button className="btn-primary">
            <i className="fa-solid fa-plus mr-2"></i>
            {t("加载更多工具")}
          </button>
        </div>
      </section>

      <WeekRecommend />

      <section className="mb-16">
        <h3 className="text-2xl font-bold text-neutral mb-8 text-center dark:text-white">
          按类别浏览AI工具
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <a
            href="#"
            className="bg-white p-6 rounded-xl shadow-md text-center card-hover dark:bg-gray-700"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center">
              <i className="fa-solid fa-comment text-primary text-xl"></i>
            </div>
            <h4 className="font-medium text-neutral">文本生成</h4>
            <p className="text-xs text-neutral/60 mt-1">24个工具</p>
          </a>

          <a
            href="#"
            className="bg-white p-6 rounded-xl shadow-md text-center card-hover dark:bg-gray-700"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center">
              <i className="fa-solid fa-image text-purple-600 text-xl"></i>
            </div>
            <h4 className="font-medium text-neutral">图像生成</h4>
            <p className="text-xs text-neutral/60 mt-1">32个工具</p>
          </a>

          <a
            href="#"
            className="bg-white p-6 rounded-xl shadow-md text-center card-hover dark:bg-gray-700"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
              <i className="fa-solid fa-video text-green-600 text-xl"></i>
            </div>
            <h4 className="font-medium text-neutral">视频编辑</h4>
            <p className="text-xs text-neutral/60 mt-1">18个工具</p>
          </a>

          <a
            href="#"
            className="bg-white p-6 rounded-xl shadow-md text-center card-hover dark:bg-gray-700"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-amber-100 flex items-center justify-center">
              <i className="fa-solid fa-music text-amber-600 text-xl"></i>
            </div>
            <h4 className="font-medium text-neutral">音频处理</h4>
            <p className="text-xs text-neutral/60 mt-1">15个工具</p>
          </a>

          <a
            href="#"
            className="bg-white p-6 rounded-xl shadow-md text-center card-hover dark:bg-gray-700"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-100 flex items-center justify-center">
              <i className="fa-solid fa-code text-red-600 text-xl"></i>
            </div>
            <h4 className="font-medium text-neutral">代码辅助</h4>
            <p className="text-xs text-neutral/60 mt-1">12个工具</p>
          </a>

          <a
            href="#"
            className="bg-white p-6 rounded-xl shadow-md text-center card-hover dark:bg-gray-700"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
              <i className="fa-solid fa-ellipsis-h text-gray-600 text-xl"></i>
            </div>
            <h4 className="font-medium text-neutral">更多类别</h4>
            <p className="text-xs text-neutral/60 mt-1">42个工具</p>
          </a>
        </div>
        {/* <div className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-white/60 backdrop-blur-md p-4 shadow-lg rounded-r-lg">
          <h3 className="font-bold mb-1">分类</h3>
          <ul>
            {categories.map((category) => (
              <li
                key={category.categoryCode}
                className={`cursor-pointer py-1 hover:text-blue-500 ${
                  selectedCategory === category.categoryCode ? "text-blue-500" : ""
                }`}
                onClick={() => setSelectedCategory(category.categoryCode)}
              >
                {category.categoryName}
              </li>
            ))}
          </ul>
        </div> */}
      </section>
    </main>
  );
};

export default Home;
