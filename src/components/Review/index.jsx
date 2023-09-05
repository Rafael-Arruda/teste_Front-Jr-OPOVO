import React, { useEffect, useState, useContext } from "react";

import { Container } from './style';

import api from "../../services/api";

import ReviewItem from "../ReviewItem";

import {MovieContext} from '../../contexts/movie';

export default function Review() {

    const {currentMovie} = useContext(MovieContext);

    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        async function loadReviews() {
            const response = await api.get(`/movie/${currentMovie}/reviews`, {
                params: {
                    api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
                    language: 'pt-BR',
                }
            })            
            setReviews(response.data.results);
        }

        loadReviews();
    }, [currentMovie])

    return(
        <>
            {reviews.length === 0? 
            ''
            :
                <Container>
                    <div className="grid-1240">
                        <div className="section-header">
                            <h2>Resenhas</h2>
                            <button>Ver mais</button>
                        </div>

                        <ul className="review-list">
                            {reviews.map((item) => (
                                <ReviewItem key={item.id} reviewItem={item}/>
                            ))}
                        </ul>
                    </div>
                </Container>
            }
        
        </>
    )
}