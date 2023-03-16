import Top from "../../components/Top/Top.js";
import Bottom from "../../components/Bottom/Bottom.js"
import { PageContainer } from "./todayStyle.js";

export default function Today() {
    return (
        <>
            <Top />
            <PageContainer>
                <div>
                    <h2 data-test="today" >Segunda, 17/05</h2>
                    <p data-test="today-counter" >Nenhum hábito concluído ainda</p>
                </div>
            </PageContainer>
            <Bottom />
        </>
    );
}