import Logo from "../../components/Logo/Logo";
import { PageContainer } from "./loginStyle";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




export default function Login() {

    const [logEmail, setLogEmail] = useState("");
    const [logPassword, setLogPassword] = useState("");
    const [serverLog, setServerLog] = useState("waiting");
    const navigate = useNavigate();

    const isAble = (serverLog === undefined) ? true : false;

    function logUserIn(e) {
        e.preventDefault();
        setServerLog(undefined);

        const userInfo = {
            email: logEmail,
            password: logPassword
        };
        console.log(userInfo);

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

        const promise = axios.post(url, userInfo);

        promise.then((response) => {
            console.log(response.data);
            setServerLog(response.data);
            navigate("/hoje");
        });


        promise.catch((error) => {
            alert(error.response.data.message);
            setServerLog("waiting");
        });
    }

    return (
        <PageContainer>

            <Logo />

            <form onSubmit={logUserIn}>
                <input
                    data-test="email-input"
                    type="email"
                    placeholder="email"
                    required
                    value={logEmail}
                    onChange={e => setLogEmail(e.target.value)}
                    disabled={isAble} />
                <input
                    data-test="password-input"
                    type="password"
                    placeholder="senha"
                    required
                    value={logPassword}
                    onChange={e => setLogPassword(e.target.value)}
                    disabled={isAble} />

                <button data-test="login-btn"
                    disabled={isAble} >
                    Entrar
                </button>
            </form>

            <Link data-test="signup-link" to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>


        </PageContainer>
    );
}