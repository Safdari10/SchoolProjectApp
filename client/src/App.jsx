import { Outlet, useLocation } from "react-router-dom";
import "./styles/global.css";
import { AuthProvider } from "./contexts/AuthContext/AuthContext";
import { FetchProvider } from "./contexts/FetchContext/FetchContext";
import { RenderContentProvider } from "./contexts/RenderContentContex/RenderContentContex";

const App = () => {

const location = useLocation();


const dashboardType = location.pathname.includes('student-dashboard') ? "student" : "teacher"

  return (
    <AuthProvider>
      <FetchProvider>
        <RenderContentProvider dashboardType={dashboardType} > 
        <Outlet />
        </RenderContentProvider>
      </FetchProvider>
    </AuthProvider>
  );
};

export default App;
