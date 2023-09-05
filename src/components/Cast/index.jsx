import React, { useEffect, useState, useContext } from "react";

import api from "../../services/api";

import CastItem from "../CastItem";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Container } from './style';

import lightShadowRight from '../../assets/light-shadow-right.png';
import lightShadowLeft from '../../assets/light-shadow-left.png';

import {MovieContext} from '../../contexts/movie';

export default function Cast() {    

    const {currentMovie} = useContext(MovieContext);

    const [credits, setCredits] = useState([]);
    const [swipperChange, setSwipperChange] = useState(false);
    const [slides, setSlides] = useState(7.6);

    useEffect(() => {
        
        async function loadCredits() {
            const response = await api.get(`/movie/${currentMovie}/credits`, {
                params: {
                    api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
                    language: 'pt-BR',
                }
            })            
            setCredits(response.data.cast.slice(0, 20));
        }

        loadCredits();
    }, [currentMovie])

    useEffect(() => {
        function handleRezise() {
            if(window.innerWidth < 400) {
                setSlides(2.1)
            }else if(window.innerWidth < 500) {
                setSlides(2.5)
            }else if(window.innerWidth < 600) {
                setSlides(3.1)
            }else if(window.innerWidth < 700) {
                setSlides(3.7)
            }else if(window.innerWidth < 800) {
                setSlides(4.3)
            }else if(window.innerWidth < 900) {
                setSlides(5)
            }else if(window.innerWidth < 1000) {
                setSlides(5.8)
            }else if(window.innerWidth < 1100) {
                setSlides(6.4)
            }else if(window.innerWidth < 1200) {
                setSlides(7)
            }else {
                setSlides(7.6)
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

    return(
        <Container>
            <div className="grid-1240">
                <div className="section-header">
                    <h2>Elenco</h2>
                    <button>Ver mais</button>
                </div>
                
                <div className="carousel">
                    {swipperChange && <img className="box-shadow-left" src={lightShadowLeft} />}
                    <Swiper 
                        className="castList"
                        slidesPerView={slides}
                        onSlideChange={() => handleScrollCarousel()}
                    >
                        {credits.map((item) => (
                            <SwiperSlide key={item.id}>
                                <CastItem castItem={item}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <img className="box-shadow-right" src={lightShadowRight} />
                </div>
            </div>
        </Container>
    )
}