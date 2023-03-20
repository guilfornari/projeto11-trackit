import Top from "../../components/Top/Top.js";
import Bottom from "../../components/Bottom/Bottom.js";
import { PageContainer } from "./todayStyle.js";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../UserContext.js";
import axios from "axios";
import DayCard from "../../components/DayCard/DayCard.js";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function Today({ setBar }) {

    const userInfo = useContext(UserContext);
    const [dayHabits, setDayHabits] = useState([]);
    const now = dayjs();
    const [reloadHabits, setReloadHabits] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const whatPercentage = (percentage === 0 || dayHabits.length === 0)
        ? "Nenhum hábito concluído ainda"
        : `${percentage}% dos hábitos concluídos`;
    const isGreen = (percentage !== 0 && dayHabits.length !== 0) ? "#8FC549" : "#BABABA";

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.userInfo.token}`
            }
        };

        const promise = axios.get(url, config);
        promise.then(response => {
            setDayHabits(response.data);
            console.log(response.data);
            const newArray = response.data;
            conclusionPercent(newArray);
        }
        );
        promise.catch(error => console.log(error.data));
    }, [reloadHabits]);

    function conclusionPercent(newArray) {
        let counter = 0;
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].done === true) {
                counter++;
            }
        }
        const result = Math.ceil((counter / newArray.length) * 100);
        console.log(counter);
        console.log(result);
        setPercentage(result);
        setBar(result);
    }

    return (
        <>
            <Top />
            <PageContainer isGreen={isGreen}>
                <div>
                    <h2 data-test="today" >{now.locale("pt-br").format("dddd, D/MM")}</h2>
                    <p data-test="today-counter" >{whatPercentage}</p>
                </div>
                {dayHabits.map(habit => <DayCard
                    key={habit.id}
                    habit={habit}
                    reloadHabits={reloadHabits}
                    setReloadHabits={setReloadHabits} />)}
            </PageContainer>
            <Bottom />
        </>
    );
}