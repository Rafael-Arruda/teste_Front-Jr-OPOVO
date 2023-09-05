import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";

import { Container } from './style'; 

import api from "../../services/api";
import RecommendationItem from '../RecommendationItem';

import { Swiper, SwiperSlide } from 'swiper/react';

import darkShadowRight from '../../assets/dark-shadow-right.png';
import darkShadowLeft from '../../assets/dark-shadow-left.png';

import {MovieContext} from '../../contexts/movie';

export default function Recommendations() {

    const {currentMovie, handleMovie} = useContext(MovieContext);

    const [list, setList] = useState([]);
    const [swipperChange, setSwipperChange] = useState(false);
    const [slides, setSlides] = useState(5.6);

    useEffect(() => {
        async function loadRecommendations() {
            const response = await api.get(`/movie/${currentMovie}/recommendations`, {
                params: {
                    api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
                    language: 'pt-BR',
                }
            })

            setList(response.data.results.slice(0, 7));
        }

        loadRecommendations();
    }, [currentMovie])

    useEffect(() => {
        function handleRezise() {
            if(window.innerWidth < 400) {
                setSlides(1.6)
            }else if(window.innerWidth < 500) {
                setSlides(1.8)
            }else if(window.innerWidth < 600) {
                setSlides(2.2)
            }else if(window.innerWidth < 700) {
                setSlides(2.8)
            }else if(window.innerWidth < 800) {
                setSlides(3.4)
            }else if(window.innerWidth < 900) {
                setSlides(3.6)
            }else if(window.innerWidth < 1000) {
                setSlides(4.2)
            }else if(window.innerWidth < 1100) {
                setSlides(4.6)
            }else if(window.innerWidth < 1200) {
                setSlides(5)
            }else {
                setSlides(5.6)
            }
        }

        handleRezise();

        window.addEventListener("resize", handleRezise);

        return () => {
            window.removeEventListener("resize", handleRezise)
        }

    }, [])

    function handleScrollCarousel() {
        setSwipperChange(true);
    }

    function handleChangeMovie(id) {
        handleMovie(id);
    }

    const handleToTopScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return(
        <Container>
            <div className="grid-1240">
                <div className="section-header">
                    <h2>Recomendações</h2>
                </div>

                <div className="carousel">
                    {swipperChange && <img className="box-shadow-left" src={darkShadowLeft} />}
                    <Swiper 
                        className="recommendation-list"
                        slidesPerView={slides}
                        onSlideChange={() => handleScrollCarousel()}
                    >
                        {list.map((item) => (
                            <SwiperSlide onClick={() => handleChangeMovie(item.id)} key={item.id}>
                                <Link to={'/'} onClick={() => handleToTopScroll()}>
                                    <RecommendationItem movie={item}/>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <img className="box-shadow-right" src={darkShadowRight} />
                </div>
            </div>
        </Container>
    )
}