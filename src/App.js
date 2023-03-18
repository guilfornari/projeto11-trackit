import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SignUp";
import Habits from "./pages/HabitsPage/Habits";
import Today from "./pages/Today/Today";
import History from "./pages/History/History.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
