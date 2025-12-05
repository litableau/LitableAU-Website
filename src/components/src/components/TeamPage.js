import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const sectionPulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(201, 184, 168, 0.4);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 0 0 20px rgba(201, 184, 168, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(201, 184, 168, 0);
  }
`;

const tabSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 4px 15px rgba(10, 59, 30, 0.1);
  }
  50% {
    box-shadow: 0 6px 25px rgba(10, 59, 30, 0.3);
  }
`;

// Styled Components
const TeamPageContainer = styled.div`
  min-height: 100vh;
  background-color: #f8e8d8;
  padding: 40px 0;
  font-family: 'Inter', 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    padding: 20px 0;
  }
  
  @media (max-width: 480px) {
    padding: 15px 0;
  }
`;

const TeamHeader = styled.div`
  text-align: center;
  background-color: #f8e8d8;
  padding: 60px 20px 80px;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 40px 15px 60px;
  }
  
  @media (max-width: 480px) {
    padding: 30px 10px 40px;
  }
  
  @media (max-width: 320px) {
    padding: 20px 10px 30px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: #c9b8a8;
    border-radius: 2px;
    
    @media (max-width: 480px) {
      width: 60px;
      height: 2px;
    }
  }
`;

const MeetOurTeam = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: #0a3b1e;
  margin: 0 0 20px 0;
  letter-spacing: -1px;
  line-height: 1.1;
  font-family: 'Playfair Display', serif;
  
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin: 0 0 15px 0;
  }
  
  @media (max-width: 320px) {
    font-size: 1.8rem;
    margin: 0 0 10px 0;
  }
`;

const MeetText = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  color: #c9b8a8;
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    letter-spacing: 1.5px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.9rem;
    letter-spacing: 0.5px;
  }
`;

const OurText = styled.span`
  color: #0a3b1e;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #c9b8a8;
    border-radius: 2px;
  }
`;

const TeamText = styled.span`
  color: #0a3b1e;
  font-weight: 700;
`;

const TeamDescription = styled.p`
  font-size: 1.2rem;
  color: #0a3b1e;
  max-width: 600px;
  margin: 30px auto 0;
  line-height: 1.6;
  opacity: 0.8;
  font-weight: 400;
  font-family: 'Crimson Text', serif;
  
  @media (max-width: 1024px) {
    font-size: 1.15rem;
    padding: 0 30px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 20px;
    margin: 20px auto 0;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0 15px;
    margin: 15px auto 0;
    line-height: 1.5;
  }
  
  @media (max-width: 320px) {
    font-size: 0.95rem;
    padding: 0 10px;
    margin: 10px auto 0;
  }
`;

const DepartmentsSection = styled.div`
  text-align: center;
  margin: 60px 0;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    margin: 40px 0;
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    margin: 30px 0;
    padding: 0 10px;
  }
`;

const DepartmentButton = styled.button`
  background-color: ${props => props['data-active'] === 'true' ? '#0a3b1e' : '#c9b8a8'};
  color: ${props => props['data-active'] === 'true' ? '#f8e8d8' : '#0a3b1e'};
  border: none;
  padding: 15px 30px;
  margin: 0 10px 15px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props['data-active'] === 'true' ? '0 6px 20px rgba(10, 59, 30, 0.3)' : '0 4px 15px rgba(10, 59, 30, 0.1)'};
  position: relative;
  overflow: hidden;
  animation: ${tabSlideIn} 0.6s ease-out ${props => props['data-delay'] || 0}s both;
  font-family: 'Poppins', sans-serif;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(248, 232, 216, 0.3), transparent);
    transition: left 0.6s;
  }
  
  &:hover {
    background-color: #0a3b1e;
    color: #f8e8d8;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(10, 59, 30, 0.4);
    animation: ${glowPulse} 2s infinite;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
  
  &.active {
    background-color: #0a3b1e;
    color: #f8e8d8;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 0.95rem;
    margin: 0 8px 12px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 0.9rem;
    margin: 0 5px 10px;
    min-height: 48px; /* Larger touch target for mobile */
  }
  
  @media (max-width: 320px) {
    padding: 10px 20px;
    font-size: 0.85rem;
    margin: 0 3px 8px;
    min-height: 48px;
  }
  
  /* Touch-friendly hover states for mobile */
  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: none;
      animation: none;
    }
    
    &:active {
      background-color: #0a3b1e;
      color: #f8e8d8;
      transform: scale(0.98);
    }
  }
`;

const TeamSections = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TeamSection = styled.div`
  margin-bottom: 80px;
  transition: all 0.3s ease;
  
  &:last-child {
    margin-bottom: 40px;
  }
  
  &.pulse-animation {
    animation: ${sectionPulse} 1s ease-out;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0a3b1e;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  font-family: 'Playfair Display', serif;

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: #c9b8a8;
    border-radius: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background-color: #c9b8a8;
    border-radius: 1px;
    opacity: 0.6;
  }

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 35px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 30px;
    
    &::before {
      width: 40px;
      height: 3px;
      top: -12px;
    }
    
    &::after {
      width: 50px;
      height: 2px;
      bottom: -12px;
    }
  }
  
  @media (max-width: 320px) {
    font-size: 1.6rem;
    margin-bottom: 25px;
    
    &::before {
      width: 30px;
      height: 2px;
      top: -10px;
    }
    
    &::after {
      width: 40px;
      height: 1px;
      bottom: -10px;
    }
  }
`;

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 10px;
  }
  
  @media (max-width: 320px) {
    gap: 15px;
    padding: 0 5px;
  }
`;

const MemberCard = styled.div`
  background: #f8e8d8;
  border-radius: 20px;
  padding: 30px 20px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  box-shadow: 0 8px 25px rgba(10, 59, 30, 0.08);
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.8s ease-out ${props => props['data-delay'] || 0}s both;
  cursor: pointer;
  
  /* Enhanced touch target */
  min-height: 200px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #c9b8a8, #0a3b1e, #c9b8a8);
    border-radius: 20px 20px 0 0;
    transition: all 0.3s ease;
  }
  
  &.leadership-role::before {
    background: linear-gradient(90deg, #0a3b1e, #c9b8a8, #0a3b1e);
    height: 6px;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    border-color: #c9b8a8;
    box-shadow: 0 20px 50px rgba(10, 59, 30, 0.2);
    
    &::before {
      height: 6px;
      background: linear-gradient(90deg, #0a3b1e, #c9b8a8, #0a3b1e);
    }
  }
  
  @media (max-width: 768px) {
    padding: 25px 15px;
    border-radius: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 20px 15px;
    margin: 0 auto;
    max-width: 300px;
    width: 100%;
  }
  
  @media (max-width: 320px) {
    padding: 18px 12px;
    max-width: 280px;
  }
  
  /* Touch-friendly interactions for mobile */
  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: none;
    }
    
    &:active {
      transform: scale(0.98);
      border-color: #c9b8a8;
    }
  }
`;

const MemberImageStyled = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 20px;
  border: 4px solid #c9b8a8;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: #0a3b1e;
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin: 0 auto 15px;
    border: 3px solid #c9b8a8;
  }
  
  @media (max-width: 480px) {
    width: 90px;
    height: 90px;
    margin: 0 auto 12px;
  }
  
  @media (max-width: 320px) {
    width: 80px;
    height: 80px;
    margin: 0 auto 10px;
  }
`;

const MemberName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #0a3b1e;
  margin: 0;
  letter-spacing: 0.5px;
  font-family: 'Poppins', sans-serif;

  &.leadership-role {
    font-size: 1.4rem;
    font-weight: 700;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    
    &.leadership-role {
      font-size: 1.3rem;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    
    &.leadership-role {
      font-size: 1.2rem;
    }
  }
  
  @media (max-width: 320px) {
    font-size: 1rem;
    
    &.leadership-role {
      font-size: 1.1rem;
    }
  }
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: #c9b8a8;
  margin: 0;
  font-weight: 500;
  font-style: italic;
  letter-spacing: 0.5px;
  font-family: 'Crimson Text', serif;

  &.president, &.vice-president, &.director {
    color: #0a3b1e;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
  }

  &.head {
    color: #c9b8a8;
    font-weight: 600;
  }

  &.jr-head {
    color: rgba(201, 184, 168, 0.8);
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    letter-spacing: 0.3px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.85rem;
    letter-spacing: 0.2px;
  }
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MotivationalQuote = styled.div`
  font-size: 1.1rem;
  color: #0a3b1e;
  font-style: italic;
  max-width: 700px;
  margin: 30px auto 0;
  text-align: center;
  line-height: 1.6;
  position: relative;
  padding: 20px 40px;
  font-family: 'Crimson Text', serif;

  &::before {
    content: '"';
    position: absolute;
    left: 10px;
    top: 0;
    font-size: 3rem;
    color: #c9b8a8;
    font-family: 'Playfair Display', serif;
  }

  &::after {
    content: '"';
    position: absolute;
    right: 10px;
    bottom: -10px;
    font-size: 3rem;
    color: #c9b8a8;
    font-family: 'Playfair Display', serif;
  }
  
  @media (max-width: 1024px) {
    font-size: 1.05rem;
    padding: 18px 35px;
    margin: 25px auto 0;
  }
  
  @media (max-width: 768px) {
    font-size: 1.0rem;
    padding: 15px 30px;
    margin: 20px auto 0;
    max-width: 600px;
    
    &::before {
      font-size: 2.5rem;
      left: 8px;
    }
    
    &::after {
      font-size: 2.5rem;
      right: 8px;
      bottom: -8px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 12px 25px;
    margin: 15px auto 0;
    max-width: 90%;
    line-height: 1.5;
    
    &::before {
      font-size: 2rem;
      left: 5px;
    }
    
    &::after {
      font-size: 2rem;
      right: 5px;
      bottom: -5px;
    }
  }
  
  @media (max-width: 320px) {
    font-size: 0.9rem;
    padding: 10px 20px;
    margin: 12px auto 0;
    max-width: 95%;
    
    &::before {
      font-size: 1.8rem;
      left: 3px;
    }
    
    &::after {
      font-size: 1.8rem;
      right: 3px;
      bottom: -3px;
    }
  }
`;

const DepartmentTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #0a3b1e;
  margin-bottom: 10px;
  text-align: center;
  font-family: 'Playfair Display', serif;
  
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 6px;
  }
  
  @media (max-width: 320px) {
    font-size: 1.4rem;
    margin-bottom: 5px;
  }
`;

const DepartmentSubtitle = styled.p`
  font-size: 1.1rem;
  color: #c9b8a8;
  font-style: italic;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 500;
  font-family: 'Crimson Text', serif;
  
  @media (max-width: 1024px) {
    font-size: 1.05rem;
    margin-bottom: 25px;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 15px;
    padding: 0 10px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.9rem;
    margin-bottom: 12px;
    padding: 0 5px;
  }
`;

const SectionMotivation = styled.div`
  font-size: 1rem;
  color: #c9b8a8;
  font-style: italic;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-family: 'Crimson Text', serif;
  
  @media (max-width: 1024px) {
    font-size: 0.98rem;
    margin-bottom: 25px;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 20px;
    letter-spacing: 0.3px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 15px;
    letter-spacing: 0.2px;
    padding: 0 10px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.85rem;
    margin-bottom: 12px;
    letter-spacing: 0.1px;
    padding: 0 5px;
  }
`;

const MemberInspiration = styled.div`
  font-size: 0.85rem;
  color: rgba(10, 59, 30, 0.7);
  font-style: italic;
  text-align: center;
  margin-top: 8px;
  line-height: 1.4;
  padding: 8px 0;
  border-top: 1px solid rgba(201, 184, 168, 0.3);
  font-family: 'Crimson Text', serif;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 6px;
    padding: 6px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin-top: 5px;
    padding: 5px 0;
    line-height: 1.3;
  }
  
  @media (max-width: 320px) {
    font-size: 0.7rem;
    margin-top: 4px;
    padding: 4px 0;
  }
`;

const TeamFooterSection = styled.div`
  background: linear-gradient(135deg, #0a3b1e 0%, rgba(10, 59, 30, 0.9) 100%);
  color: #f8e8d8;
  padding: 60px 20px;
  text-align: center;
  margin-top: 60px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #c9b8a8, #f8e8d8, #c9b8a8);
  }
  
  @media (max-width: 1024px) {
    padding: 50px 20px;
    margin-top: 50px;
  }
  
  @media (max-width: 768px) {
    padding: 40px 15px;
    margin-top: 40px;
    
    &::before {
      height: 3px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 30px 10px;
    margin-top: 30px;
    
    &::before {
      height: 2px;
    }
  }
  
  @media (max-width: 320px) {
    padding: 25px 10px;
    margin-top: 25px;
  }
`;

const FooterMessage = styled.div`
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    max-width: 95%;
  }
`;

const FooterTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #f8e8d8;
  font-family: 'Playfair Display', serif;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }
  
  @media (max-width: 320px) {
    font-size: 1.6rem;
    margin-bottom: 6px;
  }
`;

const FooterSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: rgba(248, 232, 216, 0.9);
  line-height: 1.6;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 1024px) {
    font-size: 1.15rem;
    margin-bottom: 25px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 20px;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 15px;
    line-height: 1.4;
  }
  
  @media (max-width: 320px) {
    font-size: 0.95rem;
    margin-bottom: 12px;
  }
`;

const JoinButton = styled.button`
  background-color: #c9b8a8;
  color: #0a3b1e;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-family: 'Poppins', sans-serif;
  
  /* Enhanced touch target */
  min-height: 44px;
  min-width: 120px;

  &:hover {
    background-color: #f8e8d8;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 1024px) {
    padding: 14px 35px;
    font-size: 1.05rem;
  }
  
  @media (max-width: 768px) {
    padding: 12px 30px;
    font-size: 1rem;
    min-height: 48px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 25px;
    font-size: 0.95rem;
    min-height: 48px;
    min-width: 140px;
  }
  
  @media (max-width: 320px) {
    padding: 10px 20px;
    font-size: 0.9rem;
    min-height: 48px;
    min-width: 120px;
  }
  
  /* Touch-friendly interactions */
  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: none;
    }
    
    &:active {
      background-color: #f8e8d8;
      transform: scale(0.98);
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(10, 59, 30, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: ${fadeInUp} 0.3s ease-out;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
    align-items: flex-start;
    padding-top: 40px;
  }
  
  @media (max-width: 480px) {
    padding: 10px;
    padding-top: 30px;
  }
  
  @media (max-width: 320px) {
    padding: 5px;
    padding-top: 20px;
  }
`;

const ModalContent = styled.div`
  background: #f8e8d8;
  border-radius: 25px;
  padding: 40px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(10, 59, 30, 0.3);
  border: 3px solid #c9b8a8;
  animation: ${slideInLeft} 0.4s ease-out;

  @media (max-width: 1024px) {
    max-width: 450px;
    padding: 35px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    max-width: 95%;
    max-height: 85vh;
    border-radius: 20px;
    border: 2px solid #c9b8a8;
  }
  
  @media (max-width: 480px) {
    padding: 25px;
    max-width: 98%;
    max-height: 90vh;
    border-radius: 15px;
    width: calc(100% - 20px);
  }
  
  @media (max-width: 320px) {
    padding: 20px;
    max-width: 100%;
    max-height: 95vh;
    border-radius: 12px;
    width: calc(100% - 10px);
  }
  
  /* Smooth scrolling for mobile */
  -webkit-overflow-scrolling: touch;
  
  /* Custom scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(201, 184, 168, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(201, 184, 168, 0.5);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(201, 184, 168, 0.7);
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #0a3b1e;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    background-color: rgba(10, 59, 30, 0.1);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
    width: 36px;
    height: 36px;
    font-size: 1.8rem;
    /* Enhanced touch target */
    min-height: 44px;
    min-width: 44px;
  }
  
  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    font-size: 1.6rem;
    min-height: 48px;
    min-width: 48px;
  }
  
  @media (max-width: 320px) {
    top: 8px;
    right: 8px;
    font-size: 1.4rem;
    min-height: 48px;
    min-width: 48px;
  }
  
  /* Touch-friendly interactions */
  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: none;
    }
    
    &:active {
      background-color: rgba(10, 59, 30, 0.2);
      transform: scale(0.95);
    }
  }
`;

const ModalMemberImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 30px;
  border: 6px solid #c9b8a8;
  overflow: hidden;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 180px;
    height: 180px;
    margin: 0 auto 25px;
    border: 5px solid #c9b8a8;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin: 0 auto 20px;
    border: 4px solid #c9b8a8;
  }
  
  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    margin: 0 auto 15px;
    border: 3px solid #c9b8a8;
  }
  
  @media (max-width: 320px) {
    width: 100px;
    height: 100px;
    margin: 0 auto 12px;
    border: 3px solid #c9b8a8;
  }
`;

const ModalMemberName = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #0a3b1e;
  text-align: center;
  margin-bottom: 10px;
  font-family: 'Playfair Display', serif;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 6px;
    line-height: 1.1;
  }
  
  @media (max-width: 320px) {
    font-size: 1.4rem;
    margin-bottom: 5px;
  }
`;

const ModalMemberRole = styled.p`
  font-size: 1.3rem;
  color: #c9b8a8;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
  font-style: italic;
  font-family: 'Crimson Text', serif;
  line-height: 1.3;
  
  @media (max-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 18px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 12px;
    line-height: 1.2;
  }
  
  @media (max-width: 320px) {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
`;

const ModalMemberDepartment = styled.p`
  font-size: 1.1rem;
  color: #0a3b1e;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 500;
  padding: 10px 20px;
  background-color: rgba(201, 184, 168, 0.2);
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 1024px) {
    font-size: 1.05rem;
    margin-bottom: 25px;
    padding: 9px 18px;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
    padding: 8px 16px;
    border-radius: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 15px;
    padding: 7px 14px;
    border-radius: 12px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.9rem;
    margin-bottom: 12px;
    padding: 6px 12px;
    border-radius: 10px;
  }
`;

const ModalMemberDescription = styled.div`
  font-size: 1rem;
  color: #0a3b1e;
  line-height: 1.6;
  text-align: center;
  font-family: 'Crimson Text', serif;
  opacity: 0.8;
  
  @media (max-width: 1024px) {
    font-size: 0.98rem;
    line-height: 1.55;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.45;
    text-align: left;
  }
  
  @media (max-width: 320px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #c9b8a8 0%, #0a3b1e 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
`;

const PlaceholderText = styled.span`
  color: #f8e8d8;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    letter-spacing: 1.5px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
  
  @media (max-width: 320px) {
    font-size: 1.2rem;
    letter-spacing: 0.5px;
  }
`;

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState('Leadership');
  const [selectedMember, setSelectedMember] = useState(null);
  const sectionRefs = useRef({});
  const departments = ['Leadership', 'Events', 'Ops and Logistics', 'Media and Marketing', 'Contents', 'Design', 'External Relations', 'Photography', 'Tech'];

  const scrollToSection = (department) => {
    setActiveTab(department);
    const section = sectionRefs.current[department];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      section.classList.add('pulse-animation');
      setTimeout(() => {
        section.classList.remove('pulse-animation');
      }, 1000);
    }
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  const teamData = {
    Leadership: [
      { id: 1, name: 'Harish Prabu', role: 'President', image: '/images/HarishPrabu.jpg' },
      { id: 2, name: 'Ojaskrisshnan', role: 'Vice President', image: '/images/Ojaskrisshnan.jpg' },
      { id: 3, name: 'Shreem Seth', role: 'Director', image: '/images/ShreemSeth.jpg' },
    ],
    Events: [
      { id: 4, name: 'Niharika Mathan', role: 'Head', image: '/images/NiharikaMathan.jpg' },
      { id: 5, name: 'Harini R', role: 'Head', image: '/images/HariniR.jpg' },
      { id: 6, name: 'C.S Abhinav', role: 'Jr Head', image: '/images/CSAbhinav.jpg' },
      { id: 7, name: 'Ashmika Rameshkumar', role: 'Jr Head', image: '/images/AshmikRameshkumar.jpg' },
    ],
    'Ops and Logistics': [
      { id: 8, name: 'Muhammed Sheik', role: 'Head', image: '/images/MuhammedSheik.jpg' },
      { id: 9, name: 'Tanvi Shree', role: 'Head', image: '/images/TanviShree.jpg' },
      
      { id: 11, name: 'Pritika R.D', role: 'Jr Head', image: '/images/PritikaRD.jpg' },
    ],
    'Media and Marketing': [
      { id: 12, name: 'Rithik Rajkoomar', role: 'Head', image: '/images/RithikRajkoomar.jpg' },
      { id: 13, name: 'Dhanya Vikram', role: 'Head', image: '/images/DhanyaVikram.jpg' },
      { id: 14, name: 'Mohamed Jasim', role: 'Jr Head', image: '/images/MohamedJasim.jpg' },
      { id: 15, name: 'Vikass Sankar', role: 'Jr Head', image: '/images/VikassSankar.jpg' },
      { id: 16, name: 'Meenakshi Kannan', role: 'Jr Head', image: '/images/MeenakshiKannan.jpg' },
    ],
    Contents: [
      { id: 17, name: 'Guruparan', role: 'Head', image: '/images/Guruparan.jpg' },
      { id: 18, name: 'Maansi', role: 'Head', image: '/images/Maansi.jpg' },
      { id: 19, name: 'Anbini K', role: 'Jr Head', image: '/images/AnbiniK.jpg' },
    ],
    Design: [
      { id: 20, name: 'Ananya Arul', role: 'Head', image: '/images/AnanyaArul.jpg' },
      { id: 21, name: 'Dhishitha', role: 'Jr Head', image: '/images/Dhishitha.jpg' },
      { id: 22, name: 'Vaishnave', role: 'Jr Head', image: '/images/Vaishnave.jpg' },
    ],
    'External Relations': [
     ],
    Photography: [
      { id: 25, name: 'Shree Vekka Narayanee', role: 'Head', image: '/images/ShreeVekkaNarayanee.jpg' },
      { id: 26, name: 'Joshika Madhu', role: 'Head', image: '/images/JoshikaMadhu.jpg' },
    ],
    Tech: [
      { id: 27, name: 'Sonali Shruthi', role: 'Head', image: '/images/SonaliShruthi.jpg' },
    ],
  };

  return (
    <TeamPageContainer>
      <TeamHeader>
        <MeetOurTeam>
          <MeetText>Meet</MeetText>
          <OurText>Our</OurText> <TeamText>Team</TeamText>
        </MeetOurTeam>
        <TeamDescription>
          Passionate individuals united by literature, creativity, and the power of words to inspire change.
        </TeamDescription>
        <MotivationalQuote>
          "Together we write the stories that matter, create the content that inspires, and build the future of literary excellence."
        </MotivationalQuote>
      </TeamHeader>

      <DepartmentsSection>
        <DepartmentTitle>Our Departments</DepartmentTitle>
        <DepartmentSubtitle>Excellence in every field, passion in every project</DepartmentSubtitle>
        {departments.map((dept, index) => (
          <DepartmentButton 
            key={dept} 
            data-delay={index * 0.1}
            data-active={activeTab === dept}
            onClick={() => scrollToSection(dept)}
          >
            {dept}
          </DepartmentButton>
        ))}
      </DepartmentsSection>

      <TeamSections>
        {departments.map((department) => (
          <TeamSection 
            key={department}
            ref={el => sectionRefs.current[department] = el}
            id={`section-${department.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <SectionTitle>{department}</SectionTitle>
            <SectionMotivation>
              {department === 'Leadership' && "Guiding with vision, leading with purpose"}
              {department === 'Events' && "Creating memorable experiences and meaningful connections"}
              {department === 'Ops and Logistics' && "Ensuring smooth operations and seamless execution"}
              {department === 'Media and Marketing' && "Amplifying our voice and expanding our reach"}
              {department === 'Contents' && "Crafting stories that resonate and inspire"}
              {department === 'Design' && "Creating beauty that speaks to the soul"}
              {department === 'External Relations' && "Building bridges and fostering partnerships"}
              {department === 'Photography' && "Capturing moments and preserving memories"}
              {department === 'Tech' && "Building the future with innovation and code"}
            </SectionMotivation>
            <MembersGrid>
              {teamData[department].map((member, index) => {
                const isLeadershipRole = ['President', 'Vice President', 'Director'].includes(member.role);
                const roleClass = member.role.toLowerCase().replace(' ', '-');
                
                return (
                  <MemberCard 
                    key={member.id} 
                    data-delay={index * 0.1}
                    className={isLeadershipRole ? 'leadership-role' : ''}
                    onClick={() => handleMemberClick({...member, department})}
                    style={{ cursor: 'pointer' }}
                  >
                    <MemberImageStyled>
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <PlaceholderImage style={{ display: member.image ? 'none' : 'flex' }}>
                        <PlaceholderText>{member.name.split(' ').map(n => n[0]).join('')}</PlaceholderText>
                      </PlaceholderImage>
                    </MemberImageStyled>
                    <MemberInfo>
                      <MemberName className={isLeadershipRole ? 'leadership-role' : ''}>{member.name}</MemberName>
                      <MemberRole className={roleClass}>{member.role}</MemberRole>
                      <MemberInspiration>
                        {department === 'Leadership' && "Leading by example, inspiring through action"}
                        {department === 'Events' && "Every event is a story waiting to be told"}
                        {department === 'Ops and Logistics' && "Excellence is in the details"}
                        {department === 'Media and Marketing' && "Connecting hearts through compelling stories"}
                        {department === 'Contents' && "Words are our paintbrush, stories our canvas"}
                        {department === 'Design' && "Design is not just what it looks like - it's how it works"}
                        {department === 'External Relations' && "Building tomorrow's partnerships today"}
                        {department === 'Photography' && "A picture is worth a thousand words"}
                        {department === 'Tech' && "Code is poetry written in logic"}
                      </MemberInspiration>
                    </MemberInfo>
                  </MemberCard>
                );
              })}
            </MembersGrid>
          </TeamSection>
        ))}
      </TeamSections>
      
      <TeamFooterSection>
        <FooterMessage>
          <FooterTitle>Join Our Literary Journey</FooterTitle>
          <FooterSubtitle>Every great story needs passionate storytellers. Be part of ours.</FooterSubtitle>
          <JoinButton as="a" href="https://instagram.com/litclubau" target="_blank" rel="noopener noreferrer">Get Involved</JoinButton>
        </FooterMessage>
      </TeamFooterSection>

      {selectedMember && (
        <ModalOverlay onClick={closeMemberModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={closeMemberModal}>
              ×
            </ModalCloseButton>
            
            <ModalMemberImage>
              {selectedMember.image ? (
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <PlaceholderImage style={{ display: selectedMember.image ? 'none' : 'flex' }}>
                <PlaceholderText>
                  {selectedMember.name.split(' ').map(word => word[0]).join('')}
                </PlaceholderText>
              </PlaceholderImage>
            </ModalMemberImage>
            
            <ModalMemberName>{selectedMember.name}</ModalMemberName>
            <ModalMemberRole>{selectedMember.role}</ModalMemberRole>
            <ModalMemberDepartment>{selectedMember.department}</ModalMemberDepartment>
            
            <ModalMemberDescription>
              {selectedMember.role === 'President' && "Leading the Literary Club with vision and passion, fostering a community of writers and readers."}
              {selectedMember.role === 'Vice President' && "Supporting the club's mission and helping coordinate various literary activities and events."}
              {selectedMember.role === 'Director' && "Overseeing strategic initiatives and ensuring the club's continued growth and success."}
              {selectedMember.role === 'Head' && `Leading the ${selectedMember.department} team with dedication and expertise.`}
              {selectedMember.role === 'Jr Head' && `Contributing to the ${selectedMember.department} team with enthusiasm and fresh perspectives.`}
            </ModalMemberDescription>
          </ModalContent>
        </ModalOverlay>
      )}
    </TeamPageContainer>
  );
};

export default TeamPage;