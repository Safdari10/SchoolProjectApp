import { useState } from "react";
import styles from "../LoginSignup.module.css";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { useNavigate } from 'react-router-dom';

const Login = ({ userRole }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); 

        try {
          await login(email, password, userRole);
          navigate('/');
        } catch (error) {
          setErrorMessage(error.message); 
        }
       
    };

    return (
        <form className={styles.form} action="#" onSubmit={handleSubmit}>
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
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
            <button type="submit" className={styles.submit}>
                LOG IN
            </button>
        </form>
    );
};

export default Login;
