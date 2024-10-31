import { useState } from "react";
import studentBackground from "../../assets/LoginSignup/students.png";
import teacherBackground from "../../assets/LoginSignup/teachers.png";
import styles from "./LoginSignup.module.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

const LoginSignup = ({ onClose }) => {
  // Separate login state for students and teachers
  const [isStudentLogin, setIsStudentLogin] = useState(true);
  const [isTeacherLogin, setIsTeacherLogin] = useState(true);

  // Handlers for student login state
  const handleStudentClick = (showLogin) => {
    setIsStudentLogin(showLogin);
  };

  // Handlers for teacher login state
  const handleTeacherClick = (showLogin) => {
    setIsTeacherLogin(showLogin);
  };

  return (
    <div className={styles.loginSignup}>
      <div className={styles.student}>
        <a className={styles.close}/>
        <img src={studentBackground} className={styles.background} alt="Student" />
        <h1 className={styles.title}>Students</h1>
        <div className={styles.showOptionContainer}>
          <h1
            onClick={() => handleStudentClick(true)}
            className={`${styles.showOption} ${isStudentLogin ? styles.active : ""}`}>
            LOG IN
          </h1>
          <h1
            onClick={() => handleStudentClick(false)}
            className={`${styles.showOption} ${!isStudentLogin ? styles.active : ""}`}>
            SIGN UP
          </h1>
        </div>
        {isStudentLogin ? (
          <Login userRole={"student"} />
        ) : (
          <Signup userRole={"student"} />
        )}
      </div>
      <div className={styles.teacher}>
         <a className={styles.close} onClick={onClose} >X</a>
        <img src={teacherBackground} className={styles.background} alt="Teacher" />
        <h1 className={styles.title}>Teachers</h1>
        <div className={styles.showOptionContainer}>
          <h1
            onClick={() => handleTeacherClick(true)}
            className={`${styles.showOption} ${isTeacherLogin ? styles.active : ""}`}>
            LOG IN
          </h1>
          <h1
            onClick={() => handleTeacherClick(false)}
            className={`${styles.showOption} ${!isTeacherLogin ? styles.active : ""}`}>
            SIGN UP
          </h1>
        </div>
        {isTeacherLogin ? (
          <Login userRole={"teacher"} />
        ) : (
          <Signup userRole={"teacher"} />
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
