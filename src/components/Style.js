import styled from "styled-components";

export const LandingContainer = styled.main`
  font-family: "Lexend Deca", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
`;

export const InputSection = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.button`
  background: none;
  border: 1px solid black;
  padding: 0.5rem;
  :hover {
    background: black;
    color: white;
    border: 1px solid white;
  }
  :focus {
    outline: none;
  }
`;

export const Input = styled.input`
  margin: 1rem 0.5rem;
  height: 2rem;
  padding-left: 0.25rem;

  :focus {
    outline: none;
  }
`;

export const Title = styled.h1`
  text-decoration: underline;
`;

export const Link = styled.a`
  margin: 1rem;
  text-transform: uppercase;
  font-size: 0.5rem;
  text-decoration: none;

  :hover {
    color: orange;
  }
`;
