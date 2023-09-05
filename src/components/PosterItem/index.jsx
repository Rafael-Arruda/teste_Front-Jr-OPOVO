import React from "react";

import {Container} from './style';

export default function PosterItem({poster}) {
    return(
        <Container>
            <img src={`https://image.tmdb.org/t/p/w500/${poster.file_path}`} />
        </Container>
    )
}