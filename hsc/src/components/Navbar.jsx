import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import logo from "../assets/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import {mobile} from "../responsive.js";

const Container = styled.div`
    height: 150px;
    ${mobile({backgroundColor:"red"})}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: -10px;
`
const Language = styled.span`
    font-size: 20px;
    cursor: pointer;
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
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 280px;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    margin-left: 25px;
    margin-right: 15px;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>ENG</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <SearchIcon style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    <a href='/'>
                    <img
                        src={logo}
                        height={140}
                        width={170} 
                        alt='logo'
                    />
                    </a>
                </Logo>
                    
            </Center>
            <Right>
                <MenuItem>
                    <a href="https://www.instagram.com/hermanos.surfco/">
                    <InstagramIcon />
                    </a>
                </MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem>Returns</MenuItem>
                <MenuItem>Register</MenuItem>
                <MenuItem>Login</MenuItem>
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

export default Navbar