import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../UserContext";


export default function HabitCard({ habit, setListHabits, listHabits }) {

    const week = ["D", "S", "T", "Q", "Q", "S", "S"];

    const userInfo = useContext(UserContext);

    function deleteRequest(id) {

        if (window.confirm("Tens certeza que queres deletar este hábito?")) {
            deleteHabit(id);
            toggleList(listHabits);

        } else {
            alert("Vamos começar mais uma vez!");
        }
    }

    function deleteHabit(id) {
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;

        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`
            }
        };

        const promise = axios.delete(url, config);
        promise.then(response => console.log(response.data));
        promise.catch(error => console.log(error.data));
    }

    function toggleList(list) {
        if (list === true) {
            setListHabits(false);
        } else {
            setListHabits(true);
        }
    }



    return (
        <ContainerCard data-test="habit-container">
            <div>
                <h3 data-test="habit-name" >{habit.name}</h3>
                <div>
                    {week.map((day, i) => <DayBox key={i} day={day} i={i} habit={habit} />)}
                </div>
            </div>
            <ion-icon
                name="trash-outline"
                onClick={() => deleteRequest(habit.id)}
                data-test="habit-delete-btn" ></ion-icon>
        </ContainerCard>

    );
}

function DayBox({ day, i, habit }) {

    const isPicked = (habit.days.includes(i)) ? "#CFCFCF" : "#FFFFFF"

    return (
        <ContainerDay data-test="habit-day" isPicked={isPicked}>{day}</ContainerDay>
    )
}

const ContainerCard = styled.div`
    width: 340px;
    height: 91px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 11px 10px 15px 14px;
    margin-bottom: 0px;

    div {
        div{
            display: flex;
            margin-top: 8px;
        }
    }

    h3 {
        color: #666666;
        font-size: 20px;
    }

    button {

        }

    ion-icon {
        font-size: 20px;
        color: #666666;
        cursor: pointer;
    }

`;

const ContainerDay = styled.button`
    width: 30px;
    height: 30px;
    color: #DBDBDB;
    font-size: 20px;
    background-color: ${props => props.isPicked};
    border: 1px solid #D5D5D5;
    margin-right: 4px;
    border-radius: 5px;
`;