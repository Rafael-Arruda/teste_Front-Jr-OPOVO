import React from "react";

import { Container } from './style';

import Video from "../Video";
import Poster from '../Poster';
import Images from '../Images';

export default function Media() {
    return(
        <Container>
            <div className="grid-1240">
                <div className="section-header">
                    <h2>Mídia</h2>
                </div>

                <Video/>
                <Poster/>
                <Images/>
            </div>
        </Container>
    )
}