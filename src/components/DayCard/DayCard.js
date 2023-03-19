import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../UserContext";

export default function DayCard({ habit, reloadHabits, setReloadHabits }) {

    const isDone = (habit.done) ? "#8FC549" : "#E7E7E7";
    const isChecked = (habit.done) ? "#8FC549" : "#666666";

    const userToken = useContext(UserContext);

    function punchHabit(id) {
        if (!habit.done) {
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
            const config = {
                headers: {
                    "Authorization": `Bearer ${userToken.userInfo.token}`
                }
            };
            const promise = axios.post(url, {}, config);
            promise.then(() => {
                if (reloadHabits === false) {
                    setReloadHabits(true);
                } else {
                    setReloadHabits(false);
                }
            });
            promise.catch(error => console.log(error));
        } else {
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
            const config = {
                headers: {
                    "Authorization": `Bearer ${userToken.userInfo.token}`
                }
            };
            const promise = axios.post(url, {}, config);
            promise.then(() => {
                if (reloadHabits === false) {
                    setReloadHabits(true);
                } else {
                    setReloadHabits(false);
                }
            }
            );
            promise.catch(error => console.log(error));
        }
    }

    return (
        <ContainerCard data-test="today-habit-container" isDone={isDone} isChecked={isChecked}>
            <div>
                <h2 data-test="today-habit-name" >{habit.name}</h2>
                <p data-test="today-habit-sequence" >Sequência atual: <span>{habit.currentSequence} dias</span></p>
                <p data-test="today-habit-record" >Seu recorde: <span>{habit.highestSequence} dias</span></p>
            </div>
            <ion-icon data-test="today-habit-check-btn" onClick={() => punchHabit(habit.id)} name="checkbox"></ion-icon>
        </ContainerCard>
    );
}

const ContainerCard = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    display: flex;
    padding: 8px 5px 0 15px;
    justify-content: space-between;
    border-radius: 5px;
    margin-top: 10px;

    div {
        display: flex;
        flex-direction: column;

        h2 {
            color: #666666;
            font-size: 20px;
            margin-bottom: 5px;
        }

        p{
            color: #666666;
            font-size: 13px; 
            margin-top: 2px; 

            span:first-of-type {
                color: ${props => props.isChecked}
            }
        }

    }

    ion-icon {
        font-size: 78px;
        color: ${props => props.isDone};
        cursor: pointer;
    }
`;