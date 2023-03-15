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
                    required />
                <input
                    type="password"
                    placeholder="senha"
                    required />

                <button>Entrar</button>
            </form>

            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>


        </PageContainer>
    );
}