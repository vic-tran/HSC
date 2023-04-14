import styled from "styled-components";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import about from "../assets/about.png";
import Footer from "../components/Footer";

const Container = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 100px; /* Add margin top to push the image down */
    @media (max-width: 1280px) { /* Update the breakpoint as per your design */
        flex-direction: column;
        align-items: center;
        margin-top: 0;
    }
`;

const Image = styled.img`
    border: 4px solid black;
    height: auto;
    margin: 10;
    max-width: 100%;
    @media (max-width: 1280px) {
        /* Update the breakpoint as per your design */
        margin-top: 100px;
        margin-bottom: 50px;
    }
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
    margin-left: 250px;
    margin-right: 250px;
    letter-spacing: 2px;
    line-height: 1.5;
    @media (max-width: 1280px) { /* Update the breakpoint as per your design */
        margin-left: 20px;
        margin-right: 20px;
    }
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
        <Desc>What is Hermanos Surf Co? We are a brand created for the purpose of sharing our lifestyle, a lifestyle of surfing and helping others while having fun in and out of the water. We embrace the modern do-it-yourself attitude within surf culture, performance surfing, and craftsmanship. We constantly strive to minimize our environmental impact and protect the oceans and waves that raised us. This is a surf-everything and ride-anything mentality..</Desc>
        <Footer/>
    </Container>
  )
}

export default About;