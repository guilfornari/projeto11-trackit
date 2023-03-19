import axios from "axios";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { UserContext } from "../../UserContext";


export default function CreateHabitCard({ isVisible, setNewHabit, newHabit, listHabits, setListHabits }) {

    const week = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [habitName, setHabitName] = useState("");
    const [habitDays, setHabitDays] = useState([]);
    const [serverResponse, setServerResponse] = useState("waiting")

    const userInfo = useContext(UserContext);

    const isAble = (serverResponse === undefined) ? true : false;

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
        if (habitName === "" && habitDays.length === 0) {
            return alert("Coloque um nome e escolha ao menos um dia.");
        }
        setServerResponse(undefined);

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const createdHabit = {
            name: habitName,
            days: habitDays
        };
        console.log(newHabit);

        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.userInfo.token}`
            }
        };

        const promise = axios.post(url, createdHabit, config);
        promise.then(response => {
            setServerResponse(response.data);
            if (newHabit === true) {
                setNewHabit(false);
            } else {
                setNewHabit(true);
            }
        });
        promise.catch(error => {
            setServerResponse("waiting");
            alert(error.data.message);
        });

        setHabitName("");
        setHabitDays([]);

        if (listHabits === true) {
            const newBool = false;
            setListHabits(newBool);
        } else {
            setListHabits(true);
        }

    }

    function hideCard() {
        setNewHabit(false);
    }


    return (
        <ContainerCard data-test="habit-create-container" isVisible={isVisible} >
            <input
                data-test="habit-name-input"
                placeholder="nome do hábito"
                value={habitName}
                onChange={e => setHabitName(e.target.value)}
                required
                disabled={isAble} />
            <div>
                {week.map((day, i) => <DayButton
                    key={i}
                    day={day}
                    dayIndex={i}
                    pickDay={pickDay}
                    habitDays={habitDays} />)}

            </div>
            <div>
                <span
                    data-test="habit-create-cancel-btn"
                    onClick={hideCard}>
                    Cancelar
                </span>
                <button
                    data-test="habit-create-save-btn"
                    onClick={submitHabit}
                    disabled={isAble}>
                    {(isAble) ? <ThreeDots
                        height="60"
                        width="60"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    /> : "Salvar"}
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
            data-test="habit-day"
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

        span {
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