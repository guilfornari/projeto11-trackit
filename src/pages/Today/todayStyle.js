import styled from "styled-components";

const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 92px 18px 0px;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h2 {
        color: #126BA5;
        font-size: 23px;
        margin-top: 7px;
    }

    p {
        color: #BABABA;
        font-size: 18px;
        margin-top: 4px;
    }
`;

export { PageContainer };