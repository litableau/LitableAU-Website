import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <LogoSection>
            <Logo>LITCLUB</Logo>
            <LogoSubtext>Literary Excellence</LogoSubtext>
          </LogoSection>
          <SocialSection>
            <SocialTitle>Connect With Us</SocialTitle>
            <SocialLinks>
              <SocialIcon href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </SocialIcon>
            </SocialLinks>
          </SocialSection>
        </FooterTop>
        
        <FooterMiddle>
          <FooterSection>
            <SectionTitle>Quick Links</SectionTitle>
            <FooterLinks>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Our Team</FooterLink>
              <FooterLink href="#">Events</FooterLink>
              <FooterLink href="#">Publications</FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <SectionTitle>Departments</SectionTitle>
            <FooterLinks>
              <FooterLink href="#">Leadership</FooterLink>
              <FooterLink href="#">Content</FooterLink>
              <FooterLink href="#">Design</FooterLink>
              <FooterLink href="#">Tech</FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <SectionTitle>Resources</SectionTitle>
            <FooterLinks>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Newsletter</FooterLink>
              <FooterLink href="#">Gallery</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterLinks>
          </FooterSection>
        </FooterMiddle>
        
        <FooterBottom>
          <Copyright>© 2025 LITCLUB. All rights reserved.</Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background-color: #0a3b1e;
  color: #f8e8d8;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px 20px;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(248, 232, 216, 0.2);
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 2px;
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
  color: #c9b8a8;
  letter-spacing: 1px;
  font-style: italic;
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SocialTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #f8e8d8;
  letter-spacing: 0.5px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialIcon = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: rgba(248, 232, 216, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(248, 232, 216, 0.2);
  
  i {
    font-size: 1rem;
    color: #f8e8d8;
    transition: all 0.3s ease;
  }
  
  &:hover {
    background-color: #c9b8a8;
    transform: translateY(-2px);
    
    i {
      color: #0a3b1e;
    }
  }
`;

const FooterMiddle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #f8e8d8;
  margin: 0;
  position: relative;
  padding-bottom: 8px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #c9b8a8;
    border-radius: 1px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterLink = styled.a`
  color: rgba(248, 232, 216, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #c9b8a8;
    padding-left: 5px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid rgba(248, 232, 216, 0.2);
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 0.85rem;
  color: rgba(248, 232, 216, 0.7);
  letter-spacing: 0.5px;
`;

export default Footer;