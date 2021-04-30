import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const Movie = ({ movie }) => {
    return (
        <Link to={`/${movie.id}`}>
            <Container bgURL={movie.medium_cover_image} />
        </Link >
    )
}

export default Movie;