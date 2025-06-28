import type { CategoryCodeType } from '../../src/types/interface'

export const generateBadgeClass = (category: CategoryCodeType): string => {
  const map = {
    'assistant': 'bg-red-100 text-red-800',
    'search': 'bg-amber-100 text-amber-800',
    'writing': 'bg-cyan-100 text-cyan-800',
    'image': 'bg-green-100 text-green-800',
    'audio': 'bg-purple-100 text-purple-800',
    'video': 'bg-blue-100 text-blue-800',
    'office': 'bg-orange-100 text-orange-800',
    // 'ai': 'bg-gray-100 text-gray-800',
    'programming': 'bg-indigo-100 text-indigo-800',
    'design': 'bg-pink-100 text-pink-800',
    'learning': 'bg-teal-100 text-teal-800',
    'efficiency': 'bg-yellow-100 text-yellow-800',
  }
  // 为了解决元素隐式具有 "any" 类型的问题，需要确保 category 是 map 对象的键类型
  const validCategory = category as keyof typeof map;
  return map[validCategory];
}

export const generateRandomBg = (): string => {
  const colorGradientPostion = [
    'bg-gradient-to-l',
    'bg-gradient-to-r',
    'bg-gradient-to-t',
    'bg-gradient-to-b',
  ]
  const colorList = [
    'from-pink-50 to-pink-200',
    'from-yellow-50 to-yellow-200',
    'from-green-50 to-green-200',
    'from-blue-50 to-blue-200',
    'from-indigo-50 to-indigo-200',
    'from-purple-50 to-purple-200',
    'from-red-50 to-led-200',
    'from-teal-50 to-teal-200',
    'from-cyan-50 to-cyan-200',
    'from-emerald-50 to-emerald-200',
    'from-lime-50 to-lime-200',
    'from-amber-50 to-amber-200',
    'from-sky-50 to-sky-200',
    'from-violet-50 to-violet-200',
  ]
  return `${colorList[Math.floor(Math.random() * colorList.length)]} ${colorGradientPostion[Math.floor(Math.random() * colorGradientPostion.length)]}`
}
