import React from "react";

import { ListItem } from './style';

export default function CastItem({castItem}) {
    return(
        <ListItem background={castItem.profile_path}>
            <div className="character-profile"></div>
            <span className="cast-name">{castItem.name}</span>
            <span className="cast-character">{castItem.character}</span>
        </ListItem>
    )
}