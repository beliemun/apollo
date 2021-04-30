import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Header = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 50vh;
    background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);
`;

export const Title = styled.h1`
    color:white;
    font-size:100px;
    font-weight: 900;
    line-height:1.5;
`;

export const Subtitle = styled.h2`
    color:white;
    font-size:40px;
    line-height:1.5;
`;

export const Loading = styled.span`
    color:rgba(0,0,0,0.5);
    font-size:18px;
    line-height:1.5;
    margin:10px;
`;

export const MovieContainter = styled.div`
    position:relative;
    top:-100px;
    width:100%;
    max-width:1080px;
    display:grid;
    grid-gap:20px;
    grid-template-columns: repeat(auto-fill, 240px);
    place-content:center;
`;