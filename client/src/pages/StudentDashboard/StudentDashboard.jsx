import styles from "./StudentDashboard.module.css";
import Header from "./component/Header.jsx";

const StudentDashboard = () => {
  return (
    <div>
      <header className={styles.headerContainer}>
        <Header />
      </header>
      <main className={styles.mainContainer}>
        <div className={styles.sidebarContainer}></div>
        <div className={styles.contentContainer}></div>
      </main>
      <div className={styles.footerContainer}>
        <span className={styles.copyright}>&copy; LevelUp Works 2020</span>
      </div>
    </div>
  );
};

export default StudentDashboard;
