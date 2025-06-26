import { useTranslation } from "react-i18next";
export default () => {
  const { t } = useTranslation();

  return (
    <section className="mb-16 text-center">
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6 gradient-text">
        {t("探索人工智能的无限可能")}
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
          placeholder={t("搜索AI工具...")}
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
          <div className="text-neutral/70 dark:text-white">{t("工具分类")}</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700 dark:text-white">
          <div className="text-3xl font-bold text-accent mb-2 dark:text-white">
            1000+
          </div>
          <div className="text-neutral/70 dark:text-white">{t("活跃用户")}</div>
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
  );
};
