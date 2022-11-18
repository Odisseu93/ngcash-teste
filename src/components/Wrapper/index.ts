import styled from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.cinzaClaro};
`;
