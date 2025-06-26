import { categoryList } from "@/libs/const";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useTranslation } from "react-i18next";

const CategoryTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
}: any) => {
  // const { t } = useTranslation();
  return (
    <div className="flex space-x-2 overflow-x-auto py-2">
      {categories.map((category: any) => (
        <button
          key={category.code}
          className={`px-4 py-2 rounded-full cursor-pointer text-sm transition-colors ${
            activeCategory === category.code
              ? "bg-primary/20 text-white"
              : "bg-white text-neutral hover:text-primary"
          }`}
          data-category={category.code}
          onClick={() => onCategoryChange(category.code)}
        >
          {categoryList.filter((item) => item.categoryCode === category.code)[0]?.icon}
          {/* {t(category.name)} */}
        </button>
      ))}
      <button
        className={`px-4 py-2 rounded-full cursor-pointer text-sm transition-colors ${
          activeCategory === "all"
            ? "bg-primary text-white"
            : "bg-white text-neutral hover:text-primary"
        }`}
        onClick={() => onCategoryChange("all")}
      >
        {/* {t("全部")} */}
        <FontAwesomeIcon icon={faBorderAll} />
      </button>
    </div>
  );
};

export default CategoryTabs;
