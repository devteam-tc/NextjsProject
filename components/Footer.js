"use client";  // Add this directive
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  z-index: 1000;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 My Website. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
