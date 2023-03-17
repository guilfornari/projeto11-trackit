import styled from "styled-components";

const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 92px 18px 0px;

    p {
        color: #666666;
        margin-top: 28px;
        font-size: 18px;
    }
`;


const TopContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    h2 {
            color: #126BA5;
            font-size: 23px;
            margin-right: 146px;
        }

        button {
            width: 40px;
            height: 35px;
            background-color: #52B6FF;
            border-radius: 5px;
            color: #FFFFFF;
            font-size: 27px;
        }
`
export { PageContainer, TopContainer };