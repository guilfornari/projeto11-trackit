import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../UserContext";

export default function CreateHabitCard({ isVisible, setNewHabit }) {

    const week = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [habitName, setHabitName] = useState("");
    const [habitDays, setHabitDays] = useState([]);

    const userInfo = useContext(UserContext);

    function pickDay(dayIndex) {
        if (habitDays.includes(dayIndex)) {
            unpickDay(dayIndex, habitDays);
        } else {
            const dayslist = [...habitDays, dayIndex];
            console.log(dayslist);
            setHabitDays([...habitDays, dayIndex]);
        }
    }

    function unpickDay(index, itemList) {
        itemList = itemList.filter(item => item !== index);
        console.log(itemList);
        setHabitDays(itemList);
    }

    function submitHabit() {
        if (habitName === "" || habitDays.length === 0) {
            return alert("Coloque um nome e escolha ao menos um dia.");
        }
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const newHabit = {
            name: habitName,
            days: habitDays
        };
        console.log(newHabit);

        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`
            }
        };
        console.log(config);

        const promise = axios.post(url, newHabit, config);
        promise.then(response => console.log(response.data));
        promise.catch(erro => erro.data);

        setHabitName("");
        setHabitDays([]);
        setNewHabit(false);
    }


    return (
        <ContainerCard isVisible={isVisible} >
            <input
                placeholder="nome do hábito"
                value={habitName}
                onChange={e => setHabitName(e.target.value)}
                required />
            <div>
                {week.map((day, i) => <DayButton
                    key={i}
                    day={day}
                    dayIndex={i}
                    pickDay={pickDay}
                    habitDays={habitDays} />)}

            </div>
            <div>
                <p>Cancelar</p>
                <button onClick={submitHabit}>
                    Salvar
                </button>
            </div>
        </ContainerCard>
    );
}

function DayButton({ day, dayIndex, pickDay, habitDays }) {

    const isSelected = (habitDays.includes(dayIndex)) ? "#CFCFCF" : "#FFFFFF";
    const alsoSelected = (habitDays.includes(dayIndex)) ? "#FFFFFF" : "#DBDBDB";
    return (
        <ButtonToSelect
            isSelected={isSelected}
            alsoSelected={alsoSelected}
            onClick={() => pickDay(dayIndex)}>
            {day}
        </ButtonToSelect>
    )
}

const ContainerCard = styled.div`
    width: 340px;
    height: 180px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-top: 20px;
    display: ${props => props.isVisible};
    flex-direction: column;
    padding: 18px 18px 15px;
    margin-bottom: 0px; 

    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 11px;
        color: #666666;
        font-size: 20px;

        &::placeholder {
            font-size: 20px;
            color: #DBDBDB;
        }
    }

    button {
        border-radius: 5px;
        cursor: pointer;
    }

    div:first-of-type {
        display: flex;
        justify-content: flex-start;
        margin-top: 8px;
    }

    div:nth-of-type(2) {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin-top: 29px;

        button {
            background-color: #52B6FF;
            width: 84px;
            height: 35px;
            color: #FFFFFF;
            font-size: 16px;
            margin-left: 23px;
        }

        p {
            cursor: pointer;
            color: #52B6FF;
            font-size: 16px;
            margin: 0px;
        }
    }

`;

const ButtonToSelect = styled.button`
            width: 30px;
            height: 30px;
            color: ${props => props.alsoSelected};
            font-size: 20px;
            background-color: ${props => props.isSelected};
            border: 1px solid #D5D5D5;
            margin-right: 4px;
`;