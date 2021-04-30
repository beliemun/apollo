import styled from "styled-components";

export const Container = styled.div`
    height:400px;
    background-color:#bdc3c7;
    border-radius:20px;
    background-image: url(${props => props.bgURL});
    background-size: cover;
    background-position:center center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;