import styled from "styled-components";
import ironman from "../../assets/ironman.jpeg";

export default function Top() {
    return (
        <ContainerHeader data-test="header">
            <h1>TrackIt</h1>
            <figure>
                <img src={ironman} alt="user face" />
            </figure>
        </ContainerHeader>
    );
}

const ContainerHeader = styled.div`
    height: 70px;
    width: 100vw;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 18px 11px;
    position: fixed;
    top: 0px;
    left: 0px;


    figure {
        width: 51px;
        height: 51px;
    }

    img {
        width: 100%;
        border-radius: 26px;
    }

    h1 {
        font-family: 'Playball', cursive;
        color: #FFFFFF;
        font-size: 39px;
    }
`;
