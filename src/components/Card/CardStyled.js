import styled from "styled-components";

export const CardContainer = styled.section`
 display: flex;
 flex-direction: column;
 gap: 1rem;
 max-width: 100%;

 box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
  rgba(0, 0, 0, 0.5) 0px 1px 1px 0px;
 border-radius: 0.3rem;
 background-color: #fff;
`;

export const CardBody = styled.article`
 display: flex;
 width: 100%;
 height: 100%;
 div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  align-items: center;
  width: 100%;
 }

 img {
  width: 30%;
  object-fit: cover;
  object-position: center;
  border-radius: 0 .3rem .3rem 0;
 }
`;

export const CardHeader=styled.section`
display: flex;
flex-direction: column;
width: 100%;
font-size: ${(props) => (props.top?"1.4rem:":".9rem")};

h2{
margin-bottom:1rem;
font-size: ${(props) =>  (props.top ? "3rem" : "1rem")};
width: 100%;
}
img {
  width: 30%;
  object-fit: cover;
  object-position: center;
  border-radius: 0 .3rem .3rem 0;
 }
` 

export const CardFooter = styled.article`
 display: flex;
 align-items: center;
 gap: 1rem;
 section {
  display: flex;
  align-items: center;
  gap: 0.3rem;
 }
`;
