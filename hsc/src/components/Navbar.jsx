import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import logo from "../assets/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";
import About from '../pages/About';
import Returns from "../pages/Returns";



const Container = styled.div`
    height: 150px;
  
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1280px) {
        flex-direction: column;
        align-items: center;
    }
   
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: -10px;
  
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    @media (max-width: 768px) {
        margin-top: 10px;
        justify-content: flex-start;
    }
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 280px;
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

const Language = styled.span`
    font-size: 20px;
    cursor: pointer;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

const SearchContainer = styled.div`
    border: 0.5px solid gray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
   
`;

const Input = styled.input`
    border: none; 

`;

const Logo = styled.image`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 180px;

    @media (max-width: 768px) {
        margin-right: 0;
    }
`;

const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    margin-left: 25px;
    margin-right: 15px;

    @media (max-width: 768px) {
        margin: 0;
        margin-right: 10px;
    }
   
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>ENG</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <SearchIcon style={{color:"gray", fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    <Link to='/'>
                    <img
                        src={logo}
                        height={140}
                        width={170} 
                        alt='logo'
                    />
                    </Link>
                </Logo>
                    
            </Center>
            <Right>
                <MenuItem>
                    <Link to="https://www.instagram.com/hermanos.surfco/">
                    <InstagramIcon />
                    </Link>
                </MenuItem>
                <MenuItem>
                  <Link to ="/about">
                    About
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/Returns">
                    Returns
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to = "/Register">
                    Register
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to = "/Login">
                    Login
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                    <ShoppingCartTwoToneIcon/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;