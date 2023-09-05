import React from "react";

import { Container } from './style';

export default function VideoItem({video}) {
    return(
        <Container>
            <iframe 
                width="100%" 
                height="200" 
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name} 
            >    
            </iframe>
        </Container>
    )
}