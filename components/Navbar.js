"use client";  // Add this directive
import styled from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  color: green;
  background-color: blue;
  z-index: 1000;
  padding: 20px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>My Sticky Navbar</h1>
    </Nav>
  );
};

export default Navbar;
