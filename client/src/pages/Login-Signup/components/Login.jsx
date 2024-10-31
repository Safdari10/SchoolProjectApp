import { useState } from "react";
import styles from "../LoginSignup.module.css";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { useNavigate } from 'react-router-dom';

const Login = ({ userRole }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false); 
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setLoading(true); // Start loading

        try {
            await login(email, password, userRole);
            // Navigate based on userRole
            const redirectPath = userRole === 'student' ? '/student-dashboard' : '/teacher-dashboard';
            navigate(redirectPath);
        } catch (error) {
            setErrorMessage(error.message); 
        } finally {
            setLoading(false); 
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
                aria-label="Email Address"
            />
            <input 
                type="password" 
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input} 
                placeholder="Password"
                required
                aria-label="Password"
            />
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
            <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? 'Logging In...' : 'LOG IN'} 
            </button>
        </form>
    );
};

export default Login;
