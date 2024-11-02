import { Outlet } from "react-router-dom";
import "./styles/global.css";
import { AuthProvider } from "./contexts/AuthContext/AuthContext";
import { FetchProvider } from "./contexts/FetchContext/FetchContext";

const App = () => {
  return (
    <AuthProvider>
      <FetchProvider>
        <Outlet />
      </FetchProvider>
    </AuthProvider>
  );
};

export default App;
