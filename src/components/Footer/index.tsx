export default () => {
  return (
    <footer className="bg-neutral text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <i className="fa-solid fa-robot text-white"></i>
              </div>
              <h3 className="text-xl font-bold">AI导航</h3>
            </div>
            <p className="text-gray-400 mb-4">
              最全面的AI工具导航网站，帮助你发现和使用最好的人工智能工具。
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-twitter"></i>
              </a> */}
              {/* <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a> */}
              <a
                href="https://github.com/laine001"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 dark:text-white">工具分类</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  文本生成
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  图像生成
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  视频编辑
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 dark:text-white">友情链接</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://itpmp.netlify.app"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  信息系统项目管理师
                </a>
              </li>
              <li>
                <a
                  href="https://laine001.github.io/ikun-ui"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ikun-ui
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
