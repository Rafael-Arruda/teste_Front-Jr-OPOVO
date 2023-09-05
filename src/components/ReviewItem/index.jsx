import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import React from "react";
import { Container } from './style';

export default function ReviewItem({ reviewItem }) {

    let date = new Date(reviewItem.created_at);
    const dateFormat = format(date, "d 'de' LLLL 'de' yyyy", {
        locale: ptBR,
    })

    return(
        <Container>
            <p className="review-content">{reviewItem.content}</p>
            <span>por <strong>{reviewItem.author}</strong></span>
            <div className="extra-information">
                <span>{dateFormat}</span>
                <span>Nota: <strong>{reviewItem.author_details.rating}</strong>/10</span>
            </div>
        </Container>
    )
}