import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import { useKeepConnectionAlive } from "./lib/customHook";

export default function App() {
  useKeepConnectionAlive(); // since the backend is deployed on render on free instance, the server sleeps after certain time, this hook always keeps pinging the server and keep the conenction alive
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
