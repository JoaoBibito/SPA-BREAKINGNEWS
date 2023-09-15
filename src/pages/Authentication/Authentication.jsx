import {AuthContainer, Section} from "./AuthenticationStyled";
import {Input} from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {signupSchema} from "../../schemas/signupSchema";
import {signinSchema} from "../../schemas/signinSchem";
import {ErrorSpan} from "../../components/Navbar/NavbarStyled.js";
import {signin, signup} from "../../Services/userService";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

export function Authentication() {
  const navigate = useNavigate();
  const {
    register: registerSignup,
    handleSubmit: handlerSubmitSignup,
    formState: {errors: errorsSignup},
  } = useForm({resolver: zodResolver(signupSchema)});
  const {
    register: registerSignin,
    handleSubmit: handlerSubmitSignin,
    formState: {errors: errorsSignin},
  } = useForm({resolver: zodResolver(signinSchema)});

  async function inHandleSubmit(data) {
    try {
      const response = await signin(data);
      Cookies.set("token", response.data, {expires: 1});
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function upHandleSubmit(data) {
    try {
      const response = await signup(data);
      Cookies.set("token", response.data, {expires: 1});
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContainer>
      <Section type='signin'>
        <h2>Entrar</h2>
        <form onSubmit={handlerSubmitSignin(inHandleSubmit)}>
          <Input
            type='email'
            placeholder='E-mail'
            name='email'
            register={registerSignin}
          />
          {errorsSignin.email && (
            <ErrorSpan>{errorsSignin.email.message} </ErrorSpan>
          )}
          <Input
            type='password'
            placeholder='Senha'
            name='password'
            register={registerSignin}
          />
          {errorsSignin.password && (
            <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>
          )}

          <Button type='submit' text='Entrar'>
            Entrar
          </Button>
        </form>
      </Section>

      <Section type='signup'>
        <h2>Cadastrar</h2>
        <form onSubmit={handlerSubmitSignup(upHandleSubmit)}>
          <Input
            type='text'
            placeholder='Nome'
            name='name'
            register={registerSignup}
          />
          {errorsSignup.name && (
            <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>
          )}

          <Input
            type='email'
            placeholder='E-mail'
            name='email'
            register={registerSignup}
          />
          {errorsSignup.email && (
            <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>
          )}

          <Input
            type='password'
            placeholder='Senha'
            name='password'
            register={registerSignup}
          />
          {errorsSignup.password && (
            <ErrorSpan>{errorsSignup.password.message}</ErrorSpan>
          )}
          <Input
            type='password'
            placeholder='Confirmar senha'
            name='confirmPassword'
            register={registerSignup}
          />
          {errorsSignup.confirmPassword && (
            <ErrorSpan>{errorsSignup.confirmPassword.message}</ErrorSpan>
          )}
          <Button type='submit' text='Cadastrar'>
            Entrar
          </Button>
        </form>
      </Section>
    </AuthContainer>
  );
}
