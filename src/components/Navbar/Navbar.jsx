import {Link, Outlet, useNavigate} from "react-router-dom";
import logo from "../../assets/logo.png";
import {Button, Nav, ImgLogo, InputSpace} from "./NavbarStyled.js";
import {useForm} from "react-hook-form";

export function Navbar() {
 const {register, handleSubmit, reset} = useForm();
 const navigate=useNavigate();
 function onSearch(data) {
  const{title} =data
  navigate(`/search/${title}`)
  reset()
 }
 return (
  <>
   <Nav>
    <form onSubmit={handleSubmit(onSearch)}>
     <InputSpace>
     <button type="submit">
      <i className="bi bi-search"></i>
     </button>
      
      <input
       {...register("title")}
       type="Text"
       placeholder="Pesquise por um titulo"
      />
     </InputSpace>
    </form>
    <Link to={"/"}>
     <ImgLogo src={logo} alt="Logo do Breaking News" />
    </Link>

    <Button>Entrar</Button>
   </Nav>
   <Outlet />
  </>
 );
}
