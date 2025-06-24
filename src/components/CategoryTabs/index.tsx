import { useTranslation } from "react-i18next";

const CategoryTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
}: any) => {
  const { t } = useTranslation();
  return (
    <div className="flex space-x-2 overflow-x-auto py-2">
      <button
          className={`px-4 py-2 rounded-full cursor-pointer text-sm transition-colors ${
            activeCategory === 'all'
              ? "bg-primary text-white"
              : "bg-white text-neutral hover:text-primary"
          }`}
          onClick={() => onCategoryChange('all')}
        >
          {t('全部')}
        </button>
      {categories.map((category: any) => (
        <button
          key={category.code}
          className={`px-4 py-2 rounded-full cursor-pointer text-sm transition-colors ${
            activeCategory === category.code
              ? "bg-primary text-white"
              : "bg-white text-neutral hover:text-primary"
          }`}
          data-category={category.code}
          onClick={() => onCategoryChange(category.code)}
        >
          {t(category.name)}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
