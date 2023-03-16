import Logo from "../../components/Logo/Logo";
import { PageContainer } from "./loginStyle";
import { Link } from "react-router-dom";


export default function Login() {
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

                <button data-test="login-btn" >Entrar</button>
            </form>

            <Link to="/cadastro"
                data-test="signup-link">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>


        </PageContainer>
    );
}