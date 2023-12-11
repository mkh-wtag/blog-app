import "./app.scss";
import NavBar from "./components/NavBar";
import NavRoutes from "./components/NavRoutes";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <div className="container-fluid">
          <NavBar />

          <NavRoutes />
        </div>
      </UserProvider>
    </>
  );
}

export default App;
