import styled from "styled-components";

export default function CreateHabitCard() {
    return (
        <ContainerCard>
            <input placeholder="nome do hábito" />
            <div>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </div>
            <div>
                <p>Cancelar</p>
                <button>Salvar</button>
            </div>
        </ContainerCard>
    );
}

const ContainerCard = styled.div`
    width: 340px;
    height: 180px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-top: 20px;
    display: flex;
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
    }

    div:first-of-type {
        display: flex;
        justify-content: flex-start;
        margin-top: 8px;

        button {
            width: 30px;
            height: 30px;
            color: #DBDBDB;
            font-size: 20px;
            background-color: #FFFFFF;
            border: 1px solid #D5D5D5;
            margin-right: 4px;
        }
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