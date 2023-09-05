import React from "react";

import {Container} from './style';

export default function PosterItem({image}) {
    return(
        <Container>
            <img src={`https://image.tmdb.org/t/p/w500/${image.file_path}`} />
        </Container>
    )
}