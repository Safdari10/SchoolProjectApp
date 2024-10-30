import logo from '../../../assets/NavBar/LevelUpWorks-white.png'
import nzFlag from '../../../assets/LanguageButtonFlags/Flag_of_New_Zealand.svg.png'
import maoriFlag from '../../../assets/LanguageButtonFlags/Tino_Rangatiratanga_Maori_sovereignty_movement_flag.svg'
import styles from './Header.module.css'

const header = () => {
  return (
    <div className={styles.homeHeader}>
      <img className={styles.logo} src={logo} alt='logo'/>
      <nav className={styles.navbar}>
      <button className={styles.nav-link}>HOME</button>
      <button className={styles.nav-link}>FEATURES</button>
      <button className={styles.nav-link}>TEACHERS</button>
      </nav>
      <div className={styles.statusbar}>
        <div className={styles.status}>
            <img src="" alt="profileIcon" />
            <div className={styles.login-signup}>REGISTER | LOGIN</div>
        </div>
        <div className={styles.lang}>
            <button>LANG</button>
            <img src={nzFlag}/>
            <img src={maoriFlag}/>
        </div>
      </div>
    </div>
  )
}

export default header
