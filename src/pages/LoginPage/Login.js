import Logo from "../../components/Logo/Logo";
import { PageContainer } from "./loginStyle";
import { Link } from "react-router-dom";


export default function Login() {
    return (
        <PageContainer>

            <Logo />

            <form onSubmit={() => alert("Sent!")}>
                <input
                    data-test="email-input"
                    type="email"
                    placeholder="email"
                    required />
                <input
                    data-test="password-input"
                    type="password"
                    placeholder="senha"
                    required />

                <button data-test="login-btn" >Entrar</button>
            </form>

            <Link data-test="signup-link" to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>


        </PageContainer>
    );
}