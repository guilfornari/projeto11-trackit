import styled from "styled-components";
import trackit from "../../assets/trackIt.jpg";

export default function Logo() {
    return (
        <ContainerLogo>
            <img src={trackit} alt="trackIt logo" />
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