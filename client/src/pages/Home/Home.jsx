import styles from './Home.module.css'
import Header from "./components/header"
import LoginSignup from "../Login-Signup/LoginSingup"
import { useState } from "react"


const Home = () => {
   const [isOpen, setIsOpen] = useState(false)

   const toggleLogin = () => {
    setIsOpen(!isOpen)
   }
  return (
    <div className={styles.home}>
   <Header onClick={toggleLogin} />
   {isOpen && <LoginSignup onClose={toggleLogin}/>}
    </div>
  )
}

export default Home
