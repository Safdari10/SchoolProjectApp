import styles from "./Header.module.css";
import logo from "../../../assets/NavBar/LevelUpWorks-blue.png";
import nzFlag from "../../../assets/NavBar/NZFlag.png";
import maoriFlag from "../../../assets/NavBar/MaoriFlag.png";

const header = () => {
  return (
    <div className={styles.studentHeader}>
      <img src={logo} className={styles.logo} />
      <div className={styles.titleCircleContainer}>
        <div className={styles.title}>
          <span className={styles.project}>PROJECT</span>
          <p className={styles.introduction}>Introduction</p>
        </div>
        <div className={styles.bigCircle}>1</div>
        <div className={styles.smallCircleContainer}>
          <div className={styles.smallCircle}></div>
          <div className={styles.smallCircle}></div>
          <div className={styles.smallCircle}></div>
          <div className={styles.smallCircle}></div>
          <div className={styles.smallCircle}></div>
          <div className={styles.smallCircle}></div>
          <div className={styles.smallCircle}></div>
          <div className={styles.smallCircle}></div>
          <div className={styles.smallCircle}></div>
          <div className={styles.smallCircle}></div>
          <div className={styles.smallCircle}></div>
          <div className={styles.smallCircle}></div>
          <div className={styles.smallCircle}></div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.startBtn}>Start Project</button>
        <button className={styles.helpBtn}>Ask Teacher for help</button>
        <button className={styles.moreBtn}>More Project</button>
      </div>
      <div className={styles.flagContainer}>
        <img src={nzFlag} alt="nz flag" className={styles.flag} />
        <img src={maoriFlag} alt="maori flag" className={styles.flag} />
      </div>
    </div>
  );
};

export default header;
