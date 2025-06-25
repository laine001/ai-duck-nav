import React, { useState } from "react";
// import { NavData } from '../libs/nav-data'; // 假设导航数据在这个文件中
// import ToolCard from './ToolCard';

interface Props {
  onFilter: (category: string) => void;
  visible: boolean;
}

const DrawerMenu: React.FC<Props> = ({ onFilter, visible }) => {
  // const [isOpen, setIsOpen] = useState(visible);

  // const toggleDrawer = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
      {/* <button onClick={toggleDrawer}>
        打开抽屉
      </button> */}
      {visible && (
        <div
          className="mask"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // 半透明黑色遮罩
            zIndex: 999, // 确保遮罩在抽屉下方
          }}
          // onClick={toggleDrawer} // 点击遮罩关闭抽屉
        />
      )}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: visible ? "300px" : "0",
          backgroundColor: "white",
          transition: "width 0.3s ease-in-out",
          overflow: "hidden",
          zIndex: 1000,
        }}
      >
        {visible && (
          <div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default DrawerMenu;
