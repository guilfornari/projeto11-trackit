import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { PageContainer } from "./signUpStyle";


export default function SignUp() {
    return (
        <PageContainer>

            <Logo />

            <form onSubmit={() => alert("Sent!")}>
                <input
                    type="email"
                    placeholder="email"
                    required
                    data-test="email-input" />
                <input
                    type="password"
                    placeholder="senha"
                    required
                    data-test="password-input" />
                <input
                    type="text"
                    placeholder="nome"
                    required
                    data-test="user-name-input" />
                <input
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