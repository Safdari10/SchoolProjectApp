import { useState } from "react";
import styles from "../LoginSignup.module.css";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";

const Signup = ({ userRole }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.")
    }

    const success = await signup(name, email, password, userRole);
    if (success) {
      // clear all fields on success
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      alert(
        `successfully signed up, you can login with your email and password`
      );
    } else {
      setErrorMessage("Signup Failed, Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
        required
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required
      />
      <input
        className={styles.input}
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <input
        className={styles.input}
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        required
      />
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      <button type="submit" className={styles.submit}>
        SIGN UP
      </button>
    </form>
  );
};

export default Signup;
