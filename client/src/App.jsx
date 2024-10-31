import { Outlet } from "react-router-dom";
import "./styles/global.css";
import { AuthProvider } from "./contexts/AuthContext/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default App;
