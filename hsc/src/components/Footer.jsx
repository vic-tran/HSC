import styled from "styled-components";
import logo from "../assets/logo.png";


const Container = styled.div`
    display: flex;
    background-color: #473C33;
`
const Image = styled.img`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    width: 10%;
    height: 10%;
`

const Info = styled.div``

function Footer() {
  return (
    <Container>
        <Image src = {logo} />
    </Container>
  );
}

export default Footer