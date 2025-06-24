// const categoryList = [
//   {
//     categoryCode: "assistant",
//     categoryName: "智能助手",
//   },
//   {
//     categoryCode: "search",
//     categoryName: "AI搜索",
//   },
//   {
//     categoryCode: "writing",
//     categoryName: "AI写作",
//   },
//   {
//     categoryCode: "image",
//     categoryName: "AI图像",
//   },
//   {
//     categoryCode: "audio",
//     categoryName: "AI音频",
//   },
//   {
//     categoryCode: "video",
//     categoryName: "视频剪辑",
//   },
//   {
//     categoryCode: "office",
//     categoryName: "办公工具",
//   },
//   {
//     categoryCode: "programming",
//     categoryName: "AI编程",
//   },
//   {
//     categoryCode: "design",
//     categoryName: "AI设计",
//   },
//   {
//     categoryCode: "learning",
//     categoryName: "AI学习",
//   },
//   {
//     categoryCode: "efficiency",
//     categoryName: "效率提升",
//   }
// ]

const categoryMap = {
  assistant: "智能助手",
  search: "AI搜索",
  writing: "AI写作",
  image: "AI图像",
  audio: "AI音频",
  video: "视频剪辑",
  office: "办公工具",
  ai: "智能体",
  programming: "AI编程",
  design: "AI设计",
  learning: "AI学习",
  efficiency: "效率提升",
}
export interface ICategoryType {
  categoryCode: CategoryCodeType;
  categoryName: CategoryNameType;
}

/**
 *  ai的分类类型code
 */
export type CategoryCodeType = keyof typeof categoryMap;
  // "assistant"
  // | "search"
  // | "writing"
  // | "image"
  // | "audio"
  // | "video"
  // | "office"
  // | "ai"
  // | "programming"
  // | "design"
  // | "learning"
  // | "efficiency"

/**
 *  ai的分类类型name
 */
export type CategoryNameType = typeof categoryMap[CategoryCodeType];
  // "智能助手"
  // | "AI搜索"
  // | "AI写作"
  // | "AI图像"
  // | "AI音频"
  // | "视频剪辑"
  // | "办公工具"
  // | "智能体"
  // | "AI编程"
  // | "AI设计"
  // | "AI学习"
  // | "效率提升"

export interface ICategoryType {
  categoryName: CategoryNameType;
  categoryCode: CategoryCodeType;
}


export interface INewDataType {
  categoryCode: CategoryCodeType,
  categoryName: CategoryNameType,
  list: {
    name: string;
    desc: string;
    url: string;
    icon: string;
  }[]
}

export interface NavItemType {
  id: number | string;
  name: string;
  desc: string;
  url: string;
  categoryCode?: CategoryCodeType;
  categoryName?: CategoryNameType;
  badgeClass?: string;
  gradientClass?: string;
  rating?: string;
  icon?: string;
}
