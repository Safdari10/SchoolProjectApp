import profile_pic from "/images/students/RawiriFletcher.png";
import NavItems from "./NavItems";
import Arrow from '../../../assets/arrowLeft.png'
import Profile from '../../../assets/profile.png'
import Setting from '../../../assets/settings.png'
import Logout from '../../../assets/logout.png'
import {useNavigate} from "react"


const SidebarWide = ({activeLink, setActiveLink}) => {
 const navigate = useNavigate()
    const settingItem = [
        {name: "Profile", icon: Profile},
        {name: "Settings", icon: Setting},
        {name: "Log out", icon: Logout},
    ]
    
    const handleNavigate = (path) => {
        switch (path) {
            case "profile":
                navigate('/student-profile-viewer')
                break;
            case "Log out":
                navigate('/')
                break;
            case "Settings":
                navigate('#')
                break;
            default:
                break;
        }
    }

  return (
    <div>
      <div className={styles.navigation}>
        <img src={profile_pic} alt="profile photo" />
        <NavItems activeLink={activeLink} setActiveLink={setActiveLink} />
      </div>
      <div className={styles.arrowContainer}>
        <img src={Arrow} alt="sidebar slider"  className={styles.arrow}/>
      </div>
      <div className={styles.settingItemContainer}>
       <div className={styles.profileContainer}>
         {settingItem.map((item, index) => (
            <img 
            key={index}
            className={styles.settingIcon}
            onClick={() => handleNavigate(path === item.name)}
            />
         ))}
       </div>
      </div>
    </div>
  );
};

export default SidebarWide;
