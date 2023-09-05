import React from "react";

import {Container} from './style';

export default function RecommendationItem({movie}) {

    let vote = movie.vote_average*10;

    return(
        <Container poster={movie.poster_path}>
            <div className="poster"></div>
            <span className="title">{movie.title}</span>
            <span className="vote">{`${vote.toFixed(0)}%`}</span>
        </Container>
    )
}