import { CardContent } from "core-challenge/components";
import { Container, ContainerCard, HeaderTitle } from './styles';
import newsService from '../../services/main';
import {useEffect, useState} from "react";

const Main = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    newsService.getNotices().then(data => {
      console.log(data);
      setNews(data.articles);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <Container>
      <HeaderTitle>Google News</HeaderTitle>
      {news.map(neww => {
        return (
          <ContainerCard>
            <CardContent label={"Ir para notícia"} heading={neww.title} subtitle={neww.source.name}
                       paragraph={neww.description || neww.content}
                       onClick={() => window.open(neww.url, '_blank')}/>
          </ContainerCard>)
      })}
    </Container>);
};

export default Main;