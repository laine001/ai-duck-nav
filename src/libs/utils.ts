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
    'ai': 'bg-gray-100 text-gray-800',
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
  const colorList = [
    'bg-red-100 text-red-800',
    'bg-blue-100 text-blue-800',
    'bg-green-100 text-green-800',
    'bg-yellow-100 text-yellow-800',
    'bg-purple-100 text-purple-800',
    'bg-pink-100 text-pink-800',
    'bg-teal-100 text-teal-800',
    'bg-indigo-100 text-indigo-800',
    'bg-orange-100 text-orange-800',
    'bg-gray-100 text-gray-800',
    'bg-cyan-100 text-cyan-800',
    'bg-amber-100 text-amber-800',
    'bg-lime-100 text-lime-800',
    'bg-fuchsia-100 text-fuchsia-800',
  ]
  return colorList[Math.floor(Math.random() * colorList.length)]
}