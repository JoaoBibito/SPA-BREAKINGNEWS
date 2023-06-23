import styled from "styled-components";
export const Nav = styled.nav`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem ;
  top: 0;
  background-color: white;
  z-index: 1;
  box-shadow: rgba(100, 100, 111, 0.2)0px 7px 29px 0px;
  
`
export const ImgLogo = styled.img`
width: 8rem;
  height: 3.5rem;
  object-fit: cover;
  cursor: pointer;`

export const InputSpace = styled.div`
 position: relative;
  width: 200px;
  display: flex;
  align-items: center;
  i{
    position: absolute;
  top: 1;
  right: 0.2rem;
  z-index: 10;
  border: none;
  background-color: #f5f5f5;
  border-radius: 0.3rem;
  padding: 0.5rem;
  }
  input{
    outline: none;
  font-size: 1rem;
  padding: 0.6rem;
  background-color: #f5f5f5;
  border: none;
  width: 100%;
  border-radius: 0.3rem;
  :focus{
  border: 1px solid #0bade3;
}  
}
  `

export const Button = styled.button`
 background-color: #0bade3;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  color: #fff;
  transition: all 0.4s ease-in-out ;
  cursor:pointer;
  border-radius: 0.3rem;
  font-family: Roboto,Arial;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`