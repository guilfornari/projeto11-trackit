import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { PageContainer } from "./signUpStyle";


export default function Cadastro() {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userImage, setUserImage] = useState("");
    const [serverResponse, setServerResponse] = useState("waiting");
    const navigate = useNavigate();

    const isAble = (serverResponse === undefined) ? true : false;

    function createUser(e) {
        e.preventDefault();
        setServerResponse(undefined);

        const userInfo = {
            email: userEmail,
            name: userName,
            image: userImage,
            password: userPassword
        };
        console.log(userInfo);

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

        const promise = axios.post(url, userInfo);

        promise.then((response) => {
            console.log(response.data);
            setServerResponse(response.data);
            navigate("/");
        })


        promise.catch(error => alert(error.response.data.message));
    }

    return (
        <PageContainer>

            <Logo />

            <form onSubmit={createUser}>
                <input data-test="email-input"
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                    type="email"
                    placeholder="email"
                    required
                    disabled={isAble} />
                <input data-test="password-input"
                    value={userPassword}
                    onChange={e => setUserPassword(e.target.value)}
                    type="password"
                    placeholder="senha"
                    required
                    disabled={isAble} />
                <input data-test="user-name-input"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    type="text"
                    placeholder="nome"
                    required
                    disabled={isAble} />
                <input data-test="user-name-input"
                    value={userImage}
                    onChange={e => setUserImage(e.target.value)}
                    type="url"
                    placeholder="foto"
                    required
                    disabled={isAble} />

                <button data-test="signup-btn"
                    disabled={isAble} >
                    Cadastrar
                </button>
            </form>

            <Link data-test="login-link" to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>

        </PageContainer>
    );
}