import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./app.scss";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Register from "./components/Register";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <div className="container-fluid">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </UserProvider>
    </>
  );
}

export default App;
