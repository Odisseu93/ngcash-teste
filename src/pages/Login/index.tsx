import { Form } from "../../components/Form";
import { Wrapper } from "../../components/Wrapper";

export const Login = () => {
  return (
    <Wrapper>
      <Form method="submit">
        <div className="box">
          <label htmlFor="user" className="lbl-User">
            Usuário
          </label>
          <input
            type="text"
            id="user"
            name="user"
            className="inp-field inp-field__user"
            placeholder="Digite o seu usuário"
          />
        </div>
        <div className="box">
          <label htmlFor="password" className="lbl-password">
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="inp-field inp-field__password"
            placeholder="Digite a sua senha"
          />
        </div>
        <input
          type="submit"
          className="button-entrar"
          value="Entrar"
          id="btnEntrar"
        />
        <p className="msg-cadastro">
          caso ainda não tenha cadastro,
          <br />
          cadastre-se<a href="#">Aqui!</a>
        </p>
      </Form>
    </Wrapper>
  );
};
