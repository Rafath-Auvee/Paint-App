
import './App.css';
import Navbar from "./components/shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NotFound from "./components/shared/NotFound";
import Home from "./components/pages/Home";
import RequireAuth from "./components/auth/RequireAuth";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              {/* <Dashboard></Dashboard> */}
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>

    </div>
  );
}

export default App;
