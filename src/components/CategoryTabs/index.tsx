import { useTranslation } from "react-i18next";

const CategoryTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
}: any) => {
  const { t } = useTranslation();
  return (
    <div className="flex space-x-2 overflow-x-auto py-2">
      {categories.map((category: any) => (
        <button
          key={category.value}
          className={`px-4 py-2 rounded-full cursor-pointer text-sm transition-colors ${
            activeCategory === category.value
              ? "bg-primary text-white"
              : "bg-white text-neutral hover:bg-neutral-light"
          }`}
          data-category={category.value}
          onClick={() => onCategoryChange(category.value)}
        >
          {t(category.label)}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
