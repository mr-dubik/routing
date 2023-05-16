import "./App.css";
import { useState } from "react";
import NavBar from "./components/nav-bar/nav-bar";
import AppRoutes from "./routes";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ login: "taradam" });

  const handleLogout = () => setUser(null);
  return (
    <div className="App">
      <header className="App-header">
        <NavBar
          user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}
        />
        <AppRoutes user={user} />
      </header>
    </div>
  );
}

export default App;
