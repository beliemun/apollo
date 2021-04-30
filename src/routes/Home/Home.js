import React from "react";
import { Container, Header, Subtitle, Title, Loading, MovieContainter } from "./styles";
import { gql, useQuery } from "@apollo/client"
import Movie from "components/Movie";

const GET_MOVIES = gql`{
    movies{
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>Apollo 2021</Title>
        <Subtitle>I love GraphQL</Subtitle>
      </Header>
      {loading
        ? <Loading>Loading...</Loading>
        : <MovieContainter>
          {data?.movies?.map(movie =>
            <Movie key={movie.id} movie={movie} isLiked={movie.isLiked} />
          )}
        </MovieContainter>
      }
    </Container>
  )
};

export default Home;