import styled from "styled-components";
import logo from "../../assets/logo.png";

export default function Logo() {
    return (
        <ContainerLogo>
            <img src={logo} alt="trackIt logo" />
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