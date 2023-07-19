import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.png"; 
import {Button,Nav,ImgLogo,InputSpace} from  "./NavbarStyled.js"
export function Navbar (){

return (
  <>
  <Nav>
    <InputSpace >
      <i className="bi bi-search"></i>
      <input type="Text" placeholder="Pesquise por um titulo"/>
    </InputSpace>
    <ImgLogo src={logo} alt="Logo do Breaking News"/>
    <Button>Entrar</Button>
  </Nav>
  <Outlet/>
  </>
)
}
