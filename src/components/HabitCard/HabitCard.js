import styled from "styled-components";

export default function HabitCard({ habit }) {

    const week = ["D", "S", "T", "Q", "Q", "S", "S"];

    return (
        <ContainerCard>
            <div>
                <h3>{habit.name}</h3>
                <div>
                    {week.map((day, i) => <DayBox key={i} day={day} i={i} habit={habit} />)}
                </div>
            </div>
            <ion-icon name="trash-outline"></ion-icon>
        </ContainerCard>

    );
}

function DayBox({ day, i, habit }) {

    const isPicked = (habit.days.includes(i)) ? "#CFCFCF" : "#FFFFFF"

    return (
        <ContainerDay isPicked={isPicked}>{day}</ContainerDay>
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