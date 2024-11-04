import styles from "./Sidebar.module.css";
import profile_pic from "/images/students/RawiriFletcher.png";
import NavItems from "./NavItems";
import Profile from "../../../assets/profile.png";
import Setting from "../../../assets/settings.png";
import Logout from "../../../assets/logout.png";
import { useNavigate } from "react-router-dom";
import { useRenderContent } from "../../../contexts/RenderContentContex/RenderContentContex";

const Sidebar = ({ isWideSidebar }) => {
  const navigate = useNavigate();
  const { activeLink, setActiveLink } = useRenderContent();
  
  const settingItem = [
    { name: "Profile", icon: Profile },
    { name: "Settings", icon: Setting },
    { name: "Log out", icon: Logout },
  ];

  const handleNavigate = (path) => {
    switch (path) {
      case "profile":
        navigate("/student-profile-viewer");
        break;
      case "Log out":
        navigate("/");
        break;
      case "Settings":
        navigate("#");
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.profilePicContainer}>
        <img
          src={profile_pic}
          alt="profile photo"
          className={styles.profilePic}
        />
      </div>
      <div className={styles.navigationContainer}>
        <NavItems
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          isWideSidebar={isWideSidebar}
        />
      </div>
      <div className={styles.settingItemContainer}>
        <div className={styles.profileContainer}>
          {settingItem.map((item, index) => (
            <div
              key={index}
              className={styles.settingItem}
              onClick={() => handleNavigate(item.name)}>
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                className={styles.settingIcon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
