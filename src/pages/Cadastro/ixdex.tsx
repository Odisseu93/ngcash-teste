import { Form } from "../../components/Form";
import { Wrapper } from "../../components/Wrapper";

export const Cadastro = () => {
  return (
    <Wrapper>
      <Form method="submit">
        <div className="box">
          <label htmlFor="user" className="lbl-User">
            Seu usuário
          </label>
          <input
            type="text"
            id="user"
            name="user"
            className="inp-field inp-field__user"
            placeholder="mrRoboto123"
          />
        </div>
        <div className="box">
          <label htmlFor="password" className="lbl-password">
            Sua senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="inp-field inp-field__password"
            placeholder="FSociety_123*"
          />
        </div>
        <div className="box">
          <label htmlFor="password" className="lbl-password">
            Confirme a senha 
          </label>
          <input
            type="password"
            id="checkPassword"
            name="checkPassword"
            className="inp-field inp-field__password"
            placeholder="FSociety_123*"
          />
        </div>
        <input
          type="submit"
          className="button-cadastrar"
          value="CADASTRAR"
          id="btnCadastrar"
        />
      </Form>
    </Wrapper>
  );
};
