import { useState } from "react";
import styles from "../LoginSignup.module.css";
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // api call logi

    if(Response.ok) {
        navigate('/#')
    }
  };

  return (
    <form className={styles.login} action="#" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
        placeholder="Email Address"
        required
      />
      <input 
      type="password" 
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className={styles.input} 
      placeholder="Password"
      required
      />
      <button type="submit" className={styles.submit}>
        LOG IN
      </button>
    </form>
  );
};

export default Login;
