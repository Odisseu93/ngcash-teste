import { useAuth } from "../../assets/context/AuthProvider/useAuth";
import { Form } from "../../components/Form";
import { Wrapper } from "../../components/Wrapper";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const email = e.currentTarget.user.value;
    const password = e.currentTarget.password.value;

    try {
      await auth.authenticate(email, password);
      navigate("/logado");
    } catch (error) {
      alert("⚠ Email e/ou senha inválidos!");
    }
  }

  return (
    <Wrapper>
      <Form
        method="submit"
        onSubmit={function (e) {
          handleSubmit(e);
        }}
      >
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
          cadastre-se<Link to="/cadastro">Aqui!</Link>
        </p>
      </Form>
    </Wrapper>
  );
};
