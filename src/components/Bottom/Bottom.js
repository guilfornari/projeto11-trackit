import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Bottom() {
    return (
        <ContainerBottom data-test="menu">

            <Link data-test="habit-link" to={"/habitos"} >
                Hábitos
            </Link>

            <TrackerCircle>
                <Link data-test="today-link" to={"/hoje"}>
                    Hoje
                </Link>
            </TrackerCircle>

            <Link data-test="history-link" to={"/historico"} >
                Histórico
            </Link>

        </ContainerBottom>
    );
}

const ContainerBottom = styled.div`
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: #FFFFFF;
    height: 70px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 31px 26px 36px;
    color: #52B6FF;
    font-size: 18px;

    a {
        text-decoration: none;
        color: #52B6FF;
        
    }
`;

const TrackerCircle = styled.div`
    background-color: #52B6FF;
    width: 91px;
    height: 91px;
    border-radius: 46px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

    a{
        color: #FFFFFF;
    }
`;