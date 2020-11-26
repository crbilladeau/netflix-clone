import styled from 'styled-components';

export const NavStyles = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 3;
  transition-timing-function: ease-in;
  transition: all 0.4s;
  h1 {
    color: #fff;
    text-shadow: 4px 2px 0px rgba(93, 0, 211, 1);
  }
`;

export const Logo = styled.img`
  width: 80px;
  object-fit: contain;
`;

export const Avatar = styled.img`
  width: 30px;
  object-fit: contain;
`;
