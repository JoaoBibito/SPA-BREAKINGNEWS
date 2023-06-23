import {useState, useEffect} from "react";
import {Card} from "../../components/Card/Card.jsx";
import {Navbar} from "../../components/Navbar/Navbar";
import {gettAllNews} from "../../Services/newsService.js";
import {HomeBody} from "./HomeStyled.js";

export default function Home() {
 const [news, setNews] = useState([]);
 
 async function findAllNews() {
  const response = await gettAllNews();
  setNews(response.data.results);
 }
 useEffect(() => {
  findAllNews();
 }, []);

 return (
  <>
   <Navbar />
   <HomeBody>
    {news.map((item) => (
     <Card
      key={item.id}
      title={item.title}
      text={item.text}
      banner={item.banner}
      likes={item.likes.length}
      comments={item.comments.length}
     />
    ))} 
   </HomeBody>
  </>
 );
}
