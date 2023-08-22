import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {searchNews} from "../../Services/newsService";
import {Card} from "../../components/Card/Card.jsx";
import {ContainerResults, SearchNews, TextResults} from "./SearchStyled";

export function Search() {
  const {title} = useParams();
  const [post, setPost] = useState([]);

  async function search() {
    try {
      const newsAPI = await searchNews(title);
      console.log(newsAPI.data.results);
      setPost(newsAPI.data.results);
    } catch {
      setPost([]);
    }
  }

  useEffect(() => {
    search();
  }, [title]);
  return (
    <ContainerResults>
      <TextResults>
        <span>
          {post.length
            ? `Encontramos ${post.length} ${
                post.length > 1 ? "resultados" : "resultado"
              }para:`
            : "Não encontramos resultados para:"}
        </span>
        <h2>{title}</h2>
      </TextResults>
      <SearchNews>
        {post.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </SearchNews>
    </ContainerResults>
  );
}
