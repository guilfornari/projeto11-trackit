import styled from "styled-components";

const PageContainer = styled.div`
    margin-top: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        width: 303px;
        display: flex;
        flex-direction: column;
        margin: 32px auto 25px;
    }

    input {
        height: 45px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding: 9px 11px 11px;
        margin-bottom: 6px;
        font-size: 20px;
        line-height: 25px;
        color: #666666;

        &::placeholder {
            font-size: 20px;
        }

        &:disabled {
            background-color: #F2F2F2;
        }
    }

    button {
        height: 45px;
        font-size: 20px;
        color: #FFFFFF;
        background-color: #52B6FF;
        border-radius: 5px;
        cursor: pointer;
    }

    a {
        font-size: 14px;
        color: #52B6FF;
    }
`;

export { PageContainer };