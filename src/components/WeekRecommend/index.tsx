export default () => {
  return (
    <section className="mb-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold gradient-text mb-4">本周精选AI工具</h3>
        <p className="text-neutral/70 max-w-2xl mx-auto">我们精心挑选的顶级AI工具，为你提供卓越的使用体验</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <a href="https://stablediffusionweb.com" target="_blank" className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row card-hover">
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <img src="https://picsum.photos/seed/stablediffusion/600/400" alt="Stable Diffusion" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full">
              热门工具
            </div>
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between dark:bg-gray-700">
            <div>
              <h4 className="text-xl font-bold text-neutral mb-2">Stable Diffusion</h4>
              <p className="text-neutral/70 mb-4">开源的文本到图像生成模型，能够创建高质量的图像和艺术作品，支持多种风格和自定义选项。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">图像生成</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">开源</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">免费</span>
              </div>
            </div>
            <button className="btn-primary self-start">
              <i className="fa-solid fa-external-link-alt mr-2"></i>访问官网
            </button>
          </div>
        </a>
        
        <a href="https://github.com/features/copilot" target="_blank" className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row card-hover">
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <img src="https://picsum.photos/seed/copilot/600/400" alt="GitHub Copilot" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-accent/90 text-white text-xs font-bold px-3 py-1 rounded-full">
              开发者最爱
            </div>
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between dark:bg-gray-700">
            <div>
              <h4 className="text-xl font-bold text-neutral mb-2">GitHub Copilot</h4>
              <p className="text-neutral/70 mb-4">由OpenAI和GitHub联合开发的AI代码助手，能够根据上下文生成代码建议，提高开发效率。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">代码辅助</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">生产力</span>
                <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded-full text-xs">开发者工具</span>
              </div>
            </div>
            <button className="btn-accent self-start">
              <i className="fa-solid fa-external-link-alt mr-2"></i>访问官网
            </button>
          </div>
        </a>
      </div>
    </section>
  )
}