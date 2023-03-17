import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { PageContainer } from "./signUpStyle";


export default function SignUp() {

    const [userInfo, setUserInfo] = useState(
        {
            email: "",
            name: "",
            image: "",
            password: ""
        }
    )


    function createUser() {

    }

    return (
        <PageContainer>

            <Logo />

            <form onSubmit={() => alert("Sent!")}>
                <input
                    value={userInfo.email}
                    onChange={e => setUserInfo(e.target.value)}
                    type="email"
                    placeholder="email"
                    required
                    data-test="email-input" />
                <input
                    value={userInfo.password}
                    onChange={e => setUserInfo(e.target.value)}
                    type="password"
                    placeholder="senha"
                    required
                    data-test="password-input" />
                <input
                    value={userInfo.name}
                    onChange={e => setUserInfo(e.target.value)}
                    type="text"
                    placeholder="nome"
                    required
                    data-test="user-name-input" />
                <input
                    value={userInfo.image}
                    onChange={e => setUserInfo(e.target.value)}
                    type="url"
                    placeholder="foto"
                    required
                    data-test="user-image-input" />

                <button data-test="signup-btn">Cadastrar</button>
            </form>

            <Link data-test="login-link" to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>

        </PageContainer>
    );
}