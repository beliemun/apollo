import styled from "styled-components";

export const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);
`;

export const Loading = styled.span`
    color:white;
    font-size:18px;
    line-height:1.5;
    margin:10px;
`;

export const DetailContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:1080px;
    height:50vh;
    padding:20px;
`;

export const LeftContainer = styled.div`
    flex:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-right:50px;
`;

export const Poster = styled.div`
    min-width: 320px;
    height: 480px;
    background-image : url(${props => props.bgURL});
    background-size : cover;
    background-position: center center;
    border-radius:20px;
`;

export const Title = styled.h1`
    color:white;
    font-size: 72px;
    font-weight: 600;
    /* line-height:1.5; */
`;

export const SubTitle = styled.span`
    color:white;
    font-size: 32px;
    line-height:1.5;
`;

export const Description = styled.p`
    color:white;
    font-size: 18px;
    line-height:1.5;
`;

export const MovieContainter = styled.div`
    width:100%;
    max-width:1080px;
    display:grid;
    grid-gap:20px;
    grid-template-columns: repeat(auto-fill, 240px);
    place-content:center;
    margin-top:20px;
`;