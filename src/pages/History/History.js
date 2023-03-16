import Top from "../../components/Top/Top.js";
import Bottom from "../../components/Bottom/Bottom.js";
import { PageContainer } from "./historyStyle.js";

export default function History() {
    return (
        <>
            <Top />
            <PageContainer>
                <div>
                    <h2>Histórico</h2>
                </div>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </PageContainer>
            <Bottom />
        </>
    );
}