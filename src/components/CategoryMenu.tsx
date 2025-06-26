import {categoryList} from "@/libs/const.tsx";

interface SiderProps {
  mini?: boolean;
  onFilterCategory?: (categoryCode: string) => void;
}

const CategoryMenu = (props: SiderProps) => {
  const {
    mini = false,
    onFilterCategory = () => {}
  } = props
  return (
    <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-6 gap-2">
      {
        categoryList.map((item) => {
          return (
            <a
              key={item.categoryCode}
              href="#"
              onClick={() => {
                onFilterCategory(item.categoryCode)
                const drawerNode = document.querySelector('#my-drawer') as HTMLElement;
                drawerNode?.click()
              }}
              className={`bg-white ${mini ? 'p-2' : 'p-6'} rounded-xl ${mini ? '' : 'shadow-md'} text-center card-hover dark:bg-gray-700`}
            >
              <div className={`w-10 h-10 mx-auto ${mini ? 'mb-1' : 'mb-3'} rounded-full ${item.bgColor} flex items-center justify-center`}>
                {item.icon}
              </div>
              {
                mini ? null : <h4 className="font-medium text-neutral">{item.categoryName}</h4>
              }
              {/*<p className="text-xs text-neutral/60 mt-1">24个工具</p>*/}
            </a>
          )
        })
      }
    </div>
  )
}

export default CategoryMenu
