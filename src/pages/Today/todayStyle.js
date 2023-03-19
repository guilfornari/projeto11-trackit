import styled from "styled-components";

const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 92px 18px 80px 18px;
    overflow-y: auto;

    div:first-of-type{
        margin-bottom: 18px;
    }

    h2 {
        color: #126BA5;
        font-size: 23px;
        margin-top: 7px;
        margin-bottom: 3px;
    }

    p {
        color: ${props => props.isGreen};
        font-size: 18px;
        margin-top: 4px;
    }
`;

export { PageContainer };