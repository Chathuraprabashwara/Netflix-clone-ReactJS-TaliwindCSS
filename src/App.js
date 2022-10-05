import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./ pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./ pages/Login";
import Signup from "./ pages/SignUp";
import Account from "./ pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
