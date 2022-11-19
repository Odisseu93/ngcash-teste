import styled from "styled-components";
import { useAuth } from "../../../assets/context/AuthProvider/useAuth";

const AcessoNegado = styled.h1`
  color: red;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;

//interface inline
export const Logado = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <AcessoNegado>Acesso negado!</AcessoNegado>;
  }

  return children;
};
