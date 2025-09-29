import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoSection>
        <Logo>LITCLUB</Logo>
        <LogoSubtext>Literary Excellence</LogoSubtext>
      </LogoSection>
      <Nav>
        <NavItem>HOME</NavItem>
        <NavItem>ABOUT</NavItem>
        <NavItem>SERVICES</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  background-color: #0a3b1e;
  color: #f8e8d8;
  box-shadow: 0 2px 10px rgba(10, 59, 30, 0.2);
  
  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 3px;
  color: #f8e8d8;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #c9b8a8;
    border-radius: 1px;
  }
`;

const LogoSubtext = styled.div`
  font-size: 0.8rem;
  letter-spacing: 1px;
  color: #c9b8a8;
  margin-top: 3px;
  font-style: italic;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const NavItem = styled.a`
  color: #f8e8d8;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #c9b8a8;
    transition: all 0.3s ease;
    transform: translateX(-50%);
    border-radius: 1px;
  }
  
  &:hover {
    color: #c9b8a8;
    
    &::before {
      width: 100%;
    }
  }
`;

export default Header;