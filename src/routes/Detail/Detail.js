import React from "react";
import { useParams } from "react-router";
import { Container, Loading, DetailContainer, Title, SubTitle, Description, LeftContainer, Poster, MovieContainter } from "./styles";
import { gql, useQuery } from "@apollo/client";
import Movie from "components/Movie";

const GET_MOVIE = gql`
    query getMovie($id: String!) { 
        movie(id: $id) {
            id
            title
            rating
            description_full
            language
            medium_cover_image
        }
        suggestions(id: $id) {
            id
            medium_cover_image
            isLiked @client
        }
    }
`;

const getLanguage = (text) => {
    switch (text) {
        case "en": return "English";
        case "ko": return "Korean";
        case "jp": return "Japanese";
        case "zh": return "Chinese";
        default: return text;
    }
}

const Detail = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, { variables: { id } });
    return (
        <Container>
            {loading
                ? <Loading>Loading...</Loading>
                :
                <>
                    <DetailContainer>
                        <LeftContainer>
                            <Title>{data?.movie?.title}</Title>
                            <SubTitle>{`${getLanguage(data?.movie?.language)} • ${data?.movie?.rating}`}</SubTitle>
                            <Description>{data?.movie?.description_full}</Description>
                        </LeftContainer>
                        <Poster bgURL={data?.movie?.medium_cover_image} />
                    </DetailContainer>
                    <SubTitle>Suggestions</SubTitle>
                    <MovieContainter>
                        {data?.suggestions?.map(movie =>
                            <Movie key={movie.id} movie={movie} isLiked={movie.isLiked} />
                        )}
                    </MovieContainter>
                </>
            }
        </Container>
    )
}

export default Detail;