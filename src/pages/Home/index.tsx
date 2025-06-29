import { useMemo, useState, memo } from "react";
import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
// import LanguageSwitcher from "@/components/LanguageSwitcher";
import ToolCard from "@/components/ToolCard";
import CategoryTabs from "@/components/CategoryTabs";
import Footer from "@/components/Footer";
import WeekRecommend from "@/components/WeekRecommend";
import FloatMenu from "@/components/FloatMenu";
// import DrawerMenu from "@/components/DrawerMenu";

import { aiNavData } from "@/libs/nav-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import type { INavListItemType, INavDataType } from "@/types/interface";
import { categoryMap } from "@/libs/const";
import CategoryMenu from "@/components/CategoryMenu";

const MemoToolCard = memo(ToolCard);

const isSimpleCardStorage = localStorage.getItem("isSimpleCard") === "true";

const Home = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("assistant");
  const [isSimpleCard, setIsSimpleCard] = useState(isSimpleCardStorage);
  const [searchText, setSearchText] = useState(""); // 搜索文本状态
  const [searchResultList, setSearchResultList] = useState<any[]>(
    []
  ); // 搜索结果列表

  const toggleCardStyle = () => {
    localStorage.setItem("isSimpleCard", String(!isSimpleCard));
    setIsSimpleCard(!isSimpleCard);
  };
  // 过滤工具
  const filteredTools = useMemo(() => {
    setSearchText("");
    if (activeCategory === "all") {
      return aiNavData;
    }
    return aiNavData.filter((tool) => tool.categoryCode === activeCategory);
  }, [activeCategory]);

  // 分类数据
  const categories = Object.keys(categoryMap).map((code) => ({
    code,
    name: categoryMap[code as keyof typeof categoryMap],
  }));

  const onFilterCategory = (categoryCode: string) => {
    setActiveCategory(categoryCode);
  };
  const onSearchTool = (searchText: string) => {
    setSearchText(searchText);
    const list = filteredTools[0].list;
    // 这里可以添加搜索逻辑，例如过滤工具列表
    const tools = list.filter((tool) => {
      return tool.name.includes(searchText);
    });
    setSearchResultList([{
      list: tools,
      categoryName: filteredTools[0].categoryName,
      categoryCode: filteredTools[0].categoryCode,
    }]);
    // setSearchText
    console.log(tools, filteredTools, "filteredTools"); // 输出搜索结果，你可以根据需要进行处理或展示
  };
  return (
    <>
      <Header onFilterCategory={onFilterCategory} onSearchTool={onSearchTool} />
      <FloatMenu />

      <main className="container mx-auto px-4 py-8">
        {/* 英雄区域 */}
        <HomeHero />

        {/* 工具分类 */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <h3 className="text-2xl font-bold text-neutral mr-2 dark:text-white">
                工具分类
              </h3>
              <button className="btn btn-circle cursor-pointer" onClick={toggleCardStyle}>
                <FontAwesomeIcon
                  icon={isSimpleCard ? faList : faBars}
                  className="hover:text-gray-600"
                />
              </button>
            </div>
            <CategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* AI工具卡片网格 */}
          {(searchText ? searchResultList : filteredTools).map((item: INavDataType) => {
            return (
              <>
                <div className="text-xl my-4">{item.categoryName}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                  {item.list.map((tool: INavListItemType, index: number) => (
                    <MemoToolCard
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
            {t('所有ai导航分类')}
          </h3>

          <CategoryMenu />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
