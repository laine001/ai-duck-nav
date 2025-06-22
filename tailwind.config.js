/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 启用暗黑模式
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 示例主题色配置
        primary: '#6366f1', // 主色调：深蓝色
        secondary: '#8b5cf6', // 辅助色：浅蓝色
        accent: '#ec4899', // 强调色：紫色
        neutral: '#1f2937', // 中性色：深灰色
        'neutral-light': '#f3f4f6', // 浅灰色
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // 自定义字体
      },
    },
  },
}