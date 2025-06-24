// src/components/ToolCard.jsx
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { generateBadgeClass, generateRandomBg } from "@/libs/utils";

const ToolCard = ({
  url,
  name,
  icon,
  categoryName,
  categoryCode,
  desc,
  isSimple,
}: any) => {
  if (isSimple) {
    return (
      <a
        href={url}
        target="_blank"
        className="p-3 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700 dark:text-white"
      >
        <div className="flex items-baseline mb-2">
          <span className="font-semibold dark:text-white">{name}</span>
          <span className="ml-2 text-xs text-gray-800 dark:text-white">
            {categoryName}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-white/600">{desc}</p>
      </a>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      className="bg-white rounded-xl overflow-hidden shadow-md card-hover tool-card dark:bg-gray-700"
      data-category={categoryCode}
    >
      <div
        // \${tool.gradientClass}
        className={`h-48 bg-gradient-to-br ${generateRandomBg()} flex items-center justify-center`}
      >
        {icon ? (
          <img
            src={icon}
            alt={categoryName}
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
        ) : (
          // icon
          <i className={`fa-solid text-white text-6xl`} />
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-neutral dark:text-white">
            {name}
          </h4>
          <span
            // ${tool.badgeClass}
            className={`px-2 py-1 ${generateBadgeClass(categoryCode)} rounded-full text-xs font-medium`}
          >
            {categoryName}
          </span>
        </div>
        <p className="text-neutral/70 text-sm mb-4 dark:text-white">{desc}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-neutral/50">
          {/* {tool.rating} */}
            <i className="fa-solid fa-star mr-1"></i> 4.2
          </span>
          <button className="text-primary cursor-pointer hover:text-secondary transition-colors text-sm font-medium">
            立即访问 <i className="fa-solid fa-arrow-right ml-1"></i>
          </button>
        </div>
      </div>
    </a>
  );
};

export default ToolCard;
