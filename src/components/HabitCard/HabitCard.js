import styled from "styled-components";

export default function HabitCard() {
    return (
        <ContainerCard>
            <div>
                <h3>Hábito bonitinho</h3>
                <div>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                </div>
            </div>
            <ion-icon name="trash-outline"></ion-icon>
        </ContainerCard>

    );
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
            width: 30px;
            height: 30px;
            color: #DBDBDB;
            font-size: 20px;
            background-color: #FFFFFF;
            border: 1px solid #D5D5D5;
            margin-right: 4px;
            border-radius: 5px;
        }

    ion-icon {
        font-size: 20px;
        color: #666666;
    }

`;