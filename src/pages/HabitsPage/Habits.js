import Bottom from "../../components/Bottom/Bottom.js";
import Top from "../../components/Top/Top.js";
import { PageContainer } from "./habitsStyle.js";

export default function Habits() {
    return (
        <>
            <Top />
            <PageContainer>
                <div>
                    <h2>Meus Hábitos</h2>
                    <button data-test="habit-create-btn" >+</button>
                </div>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </PageContainer>
            <Bottom />
        </>
    );
}

