import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMagnifyingGlass,
  faPenToSquare,
  faPaintRoller,
  faImage,
  faMusic,
  faVideo,
  faFile,
  faTachometer,
  faComment
} from "@fortawesome/free-solid-svg-icons";


export const categoryMap = {
  "assistant": "智能助手",
  "search": "AI搜索",
  "writing": "AI写作",
  "image": "AI图像",
  "programming": "AI编程",
  "audio": "AI音频",
  "video": "AI视频",
  "office": "办公工具",
  // "ai": "智能体",
  "design": "AI设计",
  // "learning": "AI学习",
  "efficiency": "效率提升",
}

export const categoryList = [
  {
    categoryName: "智能助手",
    categoryCode: "assistant",
    bgColor: "bg-blue-100",
    icon: <FontAwesomeIcon className={"text-primary text-xl"} icon={faComment} />,
  },
  {
    categoryName: "AI搜索",
    categoryCode: "search",
    bgColor: "bg-purple-100",
    icon: <FontAwesomeIcon className={"text-purple-600 text-xl"} icon={faMagnifyingGlass} />,
  },
  {
    categoryName: "AI写作",
    categoryCode: "writing",
    bgColor: "bg-green-100",
    icon: <FontAwesomeIcon className={"text-green-600 text-xl"} icon={faPenToSquare} />,
  },
  {
    categoryName: "AI图像",
    categoryCode: "image",
    bgColor: "bg-yellow-100",
    icon: <FontAwesomeIcon className={"text-yellow-600 text-xl"} icon={faImage} />,
  },
  {
    categoryName: "AI编程",
    categoryCode: "programming",
    bgColor: "bg-orange-100",
    icon: <FontAwesomeIcon className={"text-orange-600 text-xl"} icon={faCode} />,
  },
  {
    categoryName: "AI音频",
    categoryCode: "audio",
    bgColor: "bg-red-100",
     icon: <FontAwesomeIcon className={"text-red-600 text-xl"} icon={faMusic} />,
  },
  {
    categoryName: "AI视频",
    categoryCode: "video",
    bgColor: "bg-amber-100",
    icon: <FontAwesomeIcon className={"text-amber-600 text-xl"} icon={faVideo} />,
  },
  {
    categoryName: "办公工具",
    categoryCode: "office",
    bgColor: "bg-gray-100",
    icon: <FontAwesomeIcon className={"text-gray-600 text-xl"} icon={faFile} />,
  },
  {
    categoryName: "AI设计",
    categoryCode: "design",
    bgColor: "bg-sky-100",
    icon: <FontAwesomeIcon className={"text-sky-600 text-xl"} icon={faPaintRoller} />,
  },
  {
    categoryName: "效率提升",
    categoryCode: "efficiency",
    bgColor: "bg-lime-100",
    icon: <FontAwesomeIcon className={"text-lime-600 text-xl"} icon={faTachometer} />,
  }
]
