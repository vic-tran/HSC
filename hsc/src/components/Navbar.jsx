import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import logo from "../assets/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
    height: 60px;
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
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 300px;
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
                    <img
                        src={logo}
                        height={150}
                        width={170} 
                        alt='logo'
                    />
                </Logo>
                    
            </Center>
            <Right>
                <MenuItem>
                    <InstagramIcon />
                </MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
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