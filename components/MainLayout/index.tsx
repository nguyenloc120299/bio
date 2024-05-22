import React from "react";
import MainHeader from "./MainHeader";
import MainSideBar from "./MainSideBar";

interface Props {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="iload-container" style={{ display: "block" }}>
        <div className="iload">
          <div className="loader" />
        </div>
      </div>

      <div className="page-wrapper">
        <MainHeader />
        <MainSideBar />
        <div className="page_content">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
