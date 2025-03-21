import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import useInactivityLogout from "./hooks/useInactivityLogout";
import AuthService from "./utils/auth";

function App() {
  const timeoutDuration = 300000;
  const logout = () => {
    AuthService.logout();
  };

  useInactivityLogout(timeoutDuration, logout);

  return (
    <div className="container">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
