import {Link, Outlet, useNavigate} from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  Nav,
  ImgLogo,
  InputSpace,
  ErrorSpan,
  UserLoggedSpace,
} from "./NavbarStyled.js";
import {Button} from "../Button/Button.jsx";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {userLogged} from "../../Services/userService";
import {useContext, useEffect} from "react";
import Cookies from "js-cookie";
import {UserContext} from "../../Context/UserContext";

const searchSchema = z.object({
  title: z
    .string()
    .nonempty({message: "A Pesquisa não pode ser vazia"})
    .refine((value) => !/^\s*$/.test(value), {
      message: "A Pesquisa não pode ser apenas espaço",
    }),
});
export function Navbar() {
  const {user, setUser} = useContext(UserContext);
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

  async function findUserLoggedById() {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function signOut() {
    Cookies.remove("token");
    setUser(undefined);
    navigate("/");
  }

  useEffect(() => {
    if (Cookies.get("token")) findUserLoggedById();
  }, []);

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

        {user ? (
          <UserLoggedSpace>
            <Link to='/profile' style={{textDecoration: "none"}}>
              <h2>{user.name}</h2>
            </Link>
            <i className='bi bi-box-arrow-right' onClick={signOut} />
          </UserLoggedSpace>
        ) : (
          <Link to='/auth'>
            <Button type='text' text='Entrar'>
              Entrar
            </Button>
          </Link>
        )}
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
