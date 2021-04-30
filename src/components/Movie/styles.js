import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
`;

export const Poster = styled.div`
    height:400px;
    background-color:#bdc3c7;
    border-radius:20px;
    background-image: url(${props => props.bgURL});
    background-size: cover;
    background-position:center center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Button = styled.div`
    color:white;
    background-color:#2980b9;
    text-align:center;
    margin:20px 60px 40px;
    padding:15px;
    border-radius:10px;
    cursor: pointer;
    transition: background-color 0.2s linear;

    &:hover {
        background-color:#3498db;
    }
`;