import styled from "styled-components";
import ironMan from "../../assets/ironman.jpeg";

export default function Logo() {
    return (
        <ContainerLogo>
            <img src={ironMan} alt="trackIt logo" />
        </ContainerLogo>
    );
}

const ContainerLogo = styled.figure`
    width: 180px;
    height: 178px;

    img{
        width: 100%;
    }
`;