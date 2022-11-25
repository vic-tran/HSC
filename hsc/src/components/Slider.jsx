import React from 'react'
import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
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
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
`;

const ImgContainer = styled.div`
    
`;

const InfoContainer = styled.div`
    
`;

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftIcon />
        </Arrow>
        <Wrapper>

        </Wrapper>
        <Arrow direction="right">
            <ArrowRightIcon />
        </Arrow>
    </Container>
  )
}

export default Slider