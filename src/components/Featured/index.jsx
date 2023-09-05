import React, { useEffect, useState, useContext } from "react";

import api from '../../services/api';

import { Container } from './style';

import {MovieContext} from '../../contexts/movie';

export default function Featured() {

    const {currentMovie} = useContext(MovieContext);

    const [movie, setMovie] = useState([]);
    const [crew, setCrew] = useState([]); 

    let budget = parseInt(movie.budget).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    let revenue = parseInt(movie.revenue).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    let date = new Date(movie.release_date);
    let genres = []
    for(let i in movie.genres) {
        genres.push(movie.genres[i].name);
    }

    let directors = []
    let writers = []
    for(let i in crew) {
        if(crew[i].job === 'Director') {
            directors.push(crew[i].name);
        }else if(crew[i].job === 'Writer') {
            writers.push(crew[i].name);
        }
    }   

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get(`/movie/${currentMovie}`, {
                params: {
                    api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
                    language: 'pt-BR',
                }
            })
            setMovie(response.data);
            console.log(response.data);
        }
        async function loadCredits() {
            const response = await api.get(`/movie/${currentMovie}/credits`, {
                params: {
                    api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
                    language: 'pt-BR',
                }
            })
            setCrew(response.data.crew)
        }
        loadMovies();
        loadCredits();
    }, [currentMovie])

    return(
        <Container poster={movie.poster_path}>
            <div className="container-information grid-1240">
                <div className="poster"></div>
                <div className="box-movie-information grid-820">
                    <div className="box-title">
                        <h2>{movie.title}</h2>
                        <span>{`(${date.getFullYear()})`}</span>
                    </div>
                    <div className="box-overview box-genres">
                        <h4>Gêneros</h4>
                        <p>{genres.join(', ')}</p>
                    </div>
                    <div className="box-overview">
                        <h4>Sinopse</h4>
                        <p>{movie.overview}</p>
                    </div>
                    <div className="box-extra-information">
                        <div>
                            <div className="box-overview">
                                <h4>Dirigido por:</h4>
                                <p>{directors.join(', ')}</p>
                            </div>
                            <div className="box-overview">
                                <h4>Escrito por:</h4>
                                <p>{writers.join(', ')}</p>
                            </div>
                        </div>
                        <div>
                            <div className="box-overview">
                                <h4>Situação:</h4>
                                {movie.status === 'Released'? <p>Lançado</p> : <p>Não lançado</p>}
                            </div>
                            <div className="box-overview">
                                <h4>Idioma principal:</h4>
                                <p>{movie.original_language}</p>
                            </div>
                        </div>
                        <div>
                            <div className="box-overview">
                                <h4>Orçamento:</h4>
                                <p>{budget}</p>
                            </div>
                            <div className="box-overview">
                                <h4>Receita:</h4>
                                <p>{revenue}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}