import {Link, Outlet, useNavigate} from "react-router-dom";
import logo from "../../assets/logo.png";
import {Button, Nav, ImgLogo, InputSpace, ErrorSpan} from "./NavbarStyled.js";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const searchSchema = z.object({
  title: z
    .string()
    .nonempty({message: "A Pesquisa não pode ser vazia"})
    .refine((value) => !/^\s*$/.test(value), {
      message: "A Pesquisa não pode ser apenas espaço",
    }),
});
export function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  function onSearch(data) {
    const {title} = data;
    navigate(`/search/${title}`);
    reset();
  }

  function goAuth() {
    navigate("/auth/");
  }

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace>
            <button type='submit'>
              <i className='bi bi-search'></i>
            </button>

            <input
              {...register("title")}
              type='Text'
              placeholder='Pesquise por um titulo'
            />
          </InputSpace>
        </form>
        <Link to={"/"}>
          <ImgLogo src={logo} alt='Logo do Breaking News' />
        </Link>

        <Button onClick={goAuth}>Entrar</Button>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
