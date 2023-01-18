import styled from "styled-components";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import about from "../assets/about.png";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Container = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    border: 4px solid black;
    height: 60vh;
    width: 100vh;
    margin: 20px;
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
`;

const Desc = styled.p`
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 90px;
    margin-left: 150px;
    margin-right: 150px;
    letter-spacing: 2px;
    line-height: 1.5;
`;

const About = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar />
        <Wrapper>
        <Image src={about}/>
        </Wrapper>
        <Title>It all begins with an idea.</Title>
        <Desc>Hermanos Surf is a brand that represents creative freedom, a forward-thinking philosophy, and a generation of creators and innovators. We embrace the modern do-it-yourself attitude within surf culture, performance surfing, and craftsmanship. We constantly strive to minimize our environmental impact and protect the oceans and waves that raised us. This is a surf-everything and ride-anything mentality..</Desc>
        <Footer/>
    </Container>
  )
}

export default About