import styled from "styled-components";

export const Form = styled.form`
  box-sizing: border-box;
  height: 398px;
  width: 335px;
  padding: 30px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.defaultBoxShadow};

  & .box {
    height: 61.13px;

    &:nth-child(1) {
      width: 272px;
      left: 495px;
      margin-bottom: 40px;
    }

    &:nth-child(2) {
      margin-bottom: 40px;
      width: 210px;
    }
  }

  & label {
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
  }

  & .inp-field {
    height: 34px;
    border: none;
    background: ${(props) => props.theme.colors.cinzaClaro};
    border-radius: ${(props) => props.theme.borders.rd8};
    padding: 5px;
    font-weight: 700;
    font-size: 20px;
    color: ${(props) => props.theme.colors.black};

    &__user {
      width: 265px;
    }
    &__password {
      width: 213px;
    }

    &::placeholder {
      padding: 10px;
      color: coral;
    }
  }

  & .button-entrar,
  .button-cadastrar {
    height: 50.015px;
    width: 204px;
    left: 495px;
    top: 325.29px;
    margin-bottom: 30px;
    border-radius: ${(props) => props.theme.borders.rd10};
    font-weight: 700;
    font-size: 24px;
    background: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;

    &:active,
    .button-cadastrar:active {
      color: ${(props) => props.theme.colors.btnEntrarActive};
    }
  }

  & .button-cadastrar {
    margin-top: 40px;
  }

  & .msg-cadastro {
    a {
      padding: 10px;
      text-decoration: none;
    }
  }
`;
