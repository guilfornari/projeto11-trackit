import Bottom from "../../components/Bottom/Bottom.js";
import CreateHabitCard from "../../components/CreateHabitCard/CreateHabitCard.js";
import HabitCard from "../../components/HabitCard/HabitCard.js";
import Top from "../../components/Top/Top.js";
import { PageContainer, TopContainer } from "./habitsStyle.js";

export default function Habits() {
    return (
        <>
            <Top />
            <PageContainer>
                <TopContainer>
                    <h2>Meus Hábitos</h2>
                    <button data-test="habit-create-btn" >+</button>
                </TopContainer>
                <CreateHabitCard />
                <HabitCard />
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </PageContainer>
            <Bottom />
        </>
    );
}