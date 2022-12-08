import React from 'react'
import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import pic1 from '../assets/pic1.png';
import { useState } from 'react';
import { sliderItems } from "../data";



const Container = styled.div`
    padding-top: 15px;
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const ImgContainer = styled.div`
    height: 100%;
    width: 100vw;
    flex: 1;
`;

const Image = styled.img`
    height: 70%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 200px 190px;
    position: relative;
`;

const Title = styled.h1`
    font-size: 70px;
    color: black;
    display: flex;
`;

const Description = styled.p`
    margin: 100px 100px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 25px;
    color: lightgray;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [ slideIndex, setSlideIndex ] = useState(0);
    const handleClick = (direction) => {

    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftIcon />
        </Arrow>
        <Wrapper>
            {sliderItems.map((item) => (
                <Slide>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right"  onClick={()=>handleClick("right")}>
            <ArrowRightIcon />
        </Arrow>
    </Container>
  )
}

export default Slider