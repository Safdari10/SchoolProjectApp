import lbIcon from "../../../assets/StudentDashboard/learningObjectives.png";
import lbActive from "../../../assets/StudentDashboard/learningObjectivesSelected.png";
import InsIcon from "../../../assets/StudentDashboard/instructions.png";
import InsActive from "../../../assets/StudentDashboard/instructionsSelected.png";
import VidIcon from "../../../assets/StudentDashboard/video.png";
import VidActive from "../../../assets/StudentDashboard/videoSelected.png";
import MakIcon from "../../../assets/StudentDashboard/makeProject.png";
import MakActive from "../../../assets/StudentDashboard/makeProjectSelected.png";
import SubIcon from "../../../assets/StudentDashboard/submitProject.png";
import SubActive from "../../../assets/StudentDashboard/submitProjectSelected.png";
import Bonus from "../../../assets/StudentDashboard/bonusChallenge.png";
import Quiz from "../../../assets/StudentDashboard/takeTheQuiz.png";

const NavItems = ({ activeLink, setActiveLink }) => {
  const navItems = [
    {
      name: "learning-Objective",
      title: "LEARNING OBJECTIVES",
      icon: lbIcon,
      activeIcon: lbActive,
    },
    {
      name: "instructions",
      title: "INSTRUCTIONS",
      icon: InsIcon,
      activeIcon: InsActive,
    },
    {
      name: "video tutorial",
      title: "VIDEO TUTORIAL",
      icon: VidIcon,
      activeIcon: VidActive,
    },
    {
      name: "make project",
      title: "MAKE PROJECT",
      icon: MakIcon,
      activeIcon: MakActive,
    },
    {
      name: "submit project",
      title: "SUBMIT PROJECT",
      icon: SubIcon,
      activeIcon: SubActive,
    },
  ];

  return (
    <div className={styles.navItems}>
      {navItems.map((item) => (
        <div
          key={item.name}
          className={`${styles.navItem} ${
            activeLink === item.name ? styles.active : ""
          }  `}
          onClick={() => setActiveLink(item.name)}>
          <img
            src={activeLink === item.name ? item.activeIcon : item.icon}
            alt={`${item.title} icon`}
            className={styles.navIcon}
          />
          <span className={styles.navTitle}>{item.title}</span>
        </div>
      ))}
      <div className={styles.navItem}>
        <img
          src={Bonus}
          alt="bonus challenge icon"
          className={styles.navIcon}
        />
        <span className={styles.navTitle}>BONUS CHALLENGE</span>
      </div>
      <div className={styles.navItem}>
        <img src={Quiz} alt="Quiz icon" className={styles.navIcon} />
        <span className={styles.navTitle}>TAKE THE QUIZ</span>
      </div>
    </div>
  );
};

export default NavItems;
