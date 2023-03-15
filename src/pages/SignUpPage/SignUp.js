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
                    required />
                <input
                    type="password"
                    placeholder="senha"
                    required />
                <input
                    type="text"
                    placeholder="nome"
                    required />
                <input
                    type="url"
                    placeholder="foto"
                    required />

                <button>Cadastrar</button>
            </form>

            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>

        </PageContainer>
    );
}