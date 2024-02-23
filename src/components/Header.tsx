// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme/theme';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  color: #fff;
`;
const MenuHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #fff;
`;

const MenuList = styled.ul` 
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: ${theme.colors.primary};
  color: #fff;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <img src={'./images/logo.png'} />
        </Link>
      </div>
      <MenuHolder>
        <MenuList>
          <MenuItem><Link style={{color: theme.colors.gray, textDecoration: "none"}} to="/">Home</Link></MenuItem>
          <MenuItem><Link style={{color: theme.colors.gray, textDecoration: "none"}} to="/about">About</Link></MenuItem>
          <MenuItem><Link style={{color: theme.colors.gray, textDecoration: "none"}} to="/services">Services</Link></MenuItem>
        </MenuList>
        <Button>Get in Touch</Button>
      </MenuHolder>
    </HeaderContainer>
  );
};

export default Header;
