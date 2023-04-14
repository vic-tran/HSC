import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 5vh;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    padding: 1rem;
    font-size: 1rem;
    text-align: center;
    justify-content: center;
`

const Announcements = () => {
  return (
    <Container>FREE ECONOMY SHIPPING ON U.S. ORDERS OVER $100</Container>
  )
}

export default Announcements