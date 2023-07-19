import {useState, useEffect} from "react";
import {Card} from "../../components/Card/Card.jsx";
import {Navbar} from "../../components/Navbar/Navbar";
import {gettAllNews, getTopNews} from "../../Services/newsService.js";
import {HomeBody, HomeHeader} from "./HomeStyled.js";
import {News} from "../../Datas.js";

export default function Home() {
 const [news, setNews] = useState([]);
 const [topNews, setTopNews] = useState([]);
 async function findAllNews() {
  const newsResponse = await gettAllNews();
  setNews(newsResponse.data.results);
  const topNewsResponse = await getTopNews();
  setTopNews(topNewsResponse.data.news);
 }
 useEffect(() => {
  findAllNews();
 }, []);

 return (
  <>
   <HomeHeader>
    <Card
     top={true}
     key={topNews.id}
     title={topNews.title}
     text={topNews.text}
     banner={topNews.banner}
     likes={topNews.likes}
     comments={topNews.comments}
    />
   </HomeHeader>
   <HomeBody>
    {news.map((item) => (
     <Card
      key={item.id}
       top={false}
      title={item.title}
      text={item.text}
      banner={item.banner}
      likes={item.likes}
      comments={item.comments}
     />
    ))}
   </HomeBody>
  </>
 );
}
