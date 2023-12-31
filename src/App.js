import ChatComponent from "components/ChatComponent";
import "./app.scss";
import NavBar from "./components/NavBar";
import RoutesComponent from "./components/RoutesComponent";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <div className="container-fluid">
          <NavBar />
          <RoutesComponent />
          <ChatComponent />
        </div>
      </UserProvider>
    </>
  );
}

export default App;
