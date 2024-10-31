import logo from "../../../assets/NavBar/LevelUpWorks-white.png";
import nzFlag from "../../../assets/LanguageButtonFlags/Flag_of_New_Zealand.svg.png";
import maoriFlag from "../../../assets/LanguageButtonFlags/Tino_Rangatiratanga_Maori_sovereignty_movement_flag.svg";
import profile from "../../../assets/profile.png";
import styles from "./Header.module.css";

const header = ({ onClick }) => {
  return (
    <div className={styles.homeHeader}>
      <img className={styles.logo} src={logo} alt="logo" />
      <nav className={styles.navbar}>
        <a href="#" className={styles.navlink}>
          HOME
        </a>
        <a href="#" className={styles.navlink}>
          FEATURES
        </a>
        <a href="#" className={styles.navlink}>
          TEACHERS
        </a>
      </nav>
      <div className={styles.statusbar}>
        <div className={styles.lang}>
          <a href="#">LANG</a>
          <img src={nzFlag} className={styles.flag} />
          <img src={maoriFlag} className={styles.flag} />
        </div>
        <div className={styles.status}>
          <img src={profile} alt="profileIcon" className={styles.icon}/>
          <div className={styles.loginSignup} onClick={onClick}>REGISTER | LOGIN</div>
        </div>
      </div>
    </div>
  );
};

export default header;
