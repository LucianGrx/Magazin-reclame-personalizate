import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 37px;
    background-color: #000000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 500;

`;

const Announcement = () => {
    return (
            <Container>
                Super Deal! Transport GRATUIT la comenzi de peste 1000 lei!
            </Container>
    )
}

export default Announcement;