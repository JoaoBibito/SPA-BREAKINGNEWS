import logo from "../../assets/logo.png"; 
import "./Navbar.css"
export function Navbar (){

return (
  <>
  <nav>
    <div className="input-search-space">
      <i className="bi bi-search"></i>
      <input type="Text" placeholder="Pesquise por um titulo"/>
    </div>
    <img src={logo} alt="Logo do Breaking News"/>
    <button>Entrar</button>
  </nav>
  </>
)
}