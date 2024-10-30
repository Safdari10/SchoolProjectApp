import { useState } from 'react'
import studentBackground from '../../assets/LoginSignup/students.png'
import teacherBackground from '../../assets/LoginSignup/teachers.png'
import styles from './LoginSignup.module.css'
import Login from './components/Login'
import Signup from './components/Signup'


const LoginSingnup = () => {
    const [showStudentLogin, setShowStudentLogin] = useState(<Login/>) 

    const handleClick = (show) => {
        setShowStudentLogin(show)
    }

  return (
    <div className={styles.loginSingnup}>
      <div className={styles.student}>
        <img src={studentBackground}/>
        <h1 className={styles.title}>Students</h1>
        <div className={styles.showOptionContainer}>
         <h1 onClick={handleClick(show => show === <Login/>)} className={styles.showOption}>LOG IN</h1>
         <h1 onClick={handleClick(show => show === <Signup/>)} className={styles.showOption}>LOG IN</h1>
        </div>
        {showStudentLogin}
      </div>
      <div className={styles.teacher}>
        <img src={teacherBackground}/>
        <h1 className={styles.title}>Teachers</h1>
      </div>
    </div>
  )
}

export default LoginSingnup
