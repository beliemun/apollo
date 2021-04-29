import React, { lazy } from "react";
import { gql, useQuery } from "@apollo/client"

const GET_MOVIES = gql`{
    movies{
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
    const { loading, data } = useQuery(GET_MOVIES);

    return loading
        ? <h1>Loading..</h1>
        : <>
            {data && data.movies && data.movies.map(movie => <h1 key={movie.id}>{movie.id}</h1>)}
        </>
};

export default Home;