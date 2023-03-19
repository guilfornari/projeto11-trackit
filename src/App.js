import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SignUp";
import Habits from "./pages/HabitsPage/Habits";
import Today from "./pages/Today/Today";
import History from "./pages/History/History.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useState } from "react";

export default function App() {

  const [userInfo, setUserInfo] = useState({});

  return (
    <BrowserRouter>
      <UserContext.Provider value={userInfo}>
        <Routes>
          <Route path="/" element={<Login setUserInfo={setUserInfo} />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}


