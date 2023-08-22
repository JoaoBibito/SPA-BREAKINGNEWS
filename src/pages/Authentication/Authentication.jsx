import {AuthContainer, Section} from "./AuthenticationStyled";
import {Input} from "../../components/Input/Input";
export function Authentication() {
  return (
    <AuthContainer>
      <Section type='signin'>
        <h2>Entrar</h2>
        <form>
          <Input type='email' placeholder='Email' name='email' />
          <Input type='password' placeholder='Password' name='password' />
        </form>
      </Section>

      <Section type='signup'>
        <h2>Cadastrar</h2>
      </Section>
    </AuthContainer>
  );
}
