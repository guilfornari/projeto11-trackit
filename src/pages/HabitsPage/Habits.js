import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Bottom from "../../components/Bottom/Bottom.js";
import CreateHabitCard from "../../components/CreateHabitCard/CreateHabitCard.js";
import HabitCard from "../../components/HabitCard/HabitCard.js";
import Top from "../../components/Top/Top.js";
import { UserContext } from "../../UserContext.js";
import { PageContainer, TopContainer } from "./habitsStyle.js";


export default function Habits() {

    const [newHabit, setNewHabit] = useState(false);
    const isVisible = (newHabit) ? "flex" : "none";
    const [yourHabits, setYourHabits] = useState(undefined);
    const userInfo = useContext(UserContext);

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`
            }
        };

        const promise = axios.get(url, config);
        promise.then(response => {
            setYourHabits(response.data);
            console.log(response.data);
        });
        promise.catch(error => console.log(error.data));

    }, [setNewHabit]);

    function createNewHabit() {
        setNewHabit(true);
    }

    if (yourHabits === undefined) {
        return <PageContainer>Loading...</PageContainer>;
    }

    return (
        <>
            <Top />
            <PageContainer>
                <TopContainer>
                    <h2>Meus Hábitos</h2>
                    <button onClick={createNewHabit} data-test="habit-create-btn" >+</button>
                </TopContainer>
                <CreateHabitCard isVisible={isVisible} setNewHabit={setNewHabit} />

                {yourHabits.map((habit) => <HabitCard key={habit.id} habit={habit} />)}

                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>

            </PageContainer>
            <Bottom />
        </>
    );
}