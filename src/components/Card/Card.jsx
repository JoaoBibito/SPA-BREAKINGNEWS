import {CardContainer, CardBody, CardFooter} from "./CardStyled";
import {TextLimit} from "../TextLimit/TextLimit.jsx"
/* eslint-disable react/prop-types */
export function Card(props) {
 return (
  <CardContainer>
   <CardBody>
    <div>
     <h2>{props.title}</h2>
    <img src={props.banner} alt="img" />
    </div>
    <TextLimit text={props.text} limit={250}/>
   </CardBody>
   <CardFooter>
    <div>
     <i className="bi bi-hand-thumbs-up"></i>
     <span>{props.likes}</span>
    </div>
    <div>
     <i className="bi bi-chat"></i>
     <span>{props.comments}</span>
    </div>
   </CardFooter>
  </CardContainer>
 );
}
