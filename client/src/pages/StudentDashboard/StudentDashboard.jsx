import styles from "./StudentDashboard.module.css";
import { useState } from "react";
import {
  RenderContentProvider,
  useRenderContent,
} from "../../contexts/RenderContentContex/RenderContentContex.jsx";
import Header from "./component/Header.jsx";
import SidebarWide from "./sidebar/SidebarWide.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";
import Arrow from "../../assets/arrowLeft.png";

const StudentDashboardContent = () => {
  const { renderContent } = useRenderContent();
  return <div>{renderContent()}</div>;
};

const StudentDashboard = () => {
  const [isWideSidebar, setIsWideSidebar] = useState(true);

  return (
    <RenderContentProvider>
      <header className={styles.headerContainer}>
        <Header />
      </header>
      <main className={styles.mainContainer}>
        <div className={styles.sidebarContainer}>
          {isWideSidebar ? (
            <SidebarWide isWideSidebar={isWideSidebar} />
          ) : (
            <Sidebar isWideSidebar={isWideSidebar} />
          )}
          <div
            className={
              isWideSidebar ? styles.arrowContainerWide : styles.arrowContainer
            }>
            <img
              src={Arrow}
              alt="sidebar slider"
              className={styles.arrow}
              onClick={() => setIsWideSidebar(!isWideSidebar)}
            />
          </div>
        </div>

        <div
          className={
            isWideSidebar
              ? styles.contentContainerWide
              : styles.contentContainer
          }>
          <StudentDashboardContent />
        </div>
      </main>
      <div className={styles.footerContainer}>
        <span className={styles.copyright}>&copy; LevelUp Works 2020</span>
      </div>
    </RenderContentProvider>
  );
};

export default StudentDashboard;
