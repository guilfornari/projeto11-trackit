import Login from "./pages/LoginPage/Login";
import Cadastro from "./pages/SignUpPage/Cadastro";
import Habits from "./pages/HabitsPage/Habits";
import Today from "./pages/Today/Today";
import History from "./pages/History/History.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
