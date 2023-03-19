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
  const [bar, setBar] = useState(0);

  const objectUser = { userInfo: userInfo, bar: bar };

  return (
    <BrowserRouter>
      <UserContext.Provider value={objectUser}>
        <Routes>
          <Route path="/" element={<Login setUserInfo={setUserInfo} />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today setBar={setBar} />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}


