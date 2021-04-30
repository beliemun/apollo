import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Poster, Button } from "./styles";

const LIKE_MOVIE = gql`
    mutation likeMovie($id: String!){
        likeMovie(id:$id) @client
    }
`;

const Movie = ({ movie, isLiked }) => {
    const [likeMovie] = useMutation(LIKE_MOVIE, { variables: { id: movie.id } });

    return (
        <Container>
            <Link to={`/${movie.id}`}>
                <Poster bgURL={movie.medium_cover_image} />
            </Link >
            <Button onClick={likeMovie}>{isLiked ? "취소" : "👍 좋아요"}</Button>
        </Container>
    )
}

export default Movie;