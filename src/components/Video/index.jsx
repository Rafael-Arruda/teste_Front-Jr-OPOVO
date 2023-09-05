import React, {useEffect, useState, useContext} from "react";
import { Container } from './style';
import api from '../../services/api';
import VideoItem from "../VideoItem";

import lightShadowRight from '../../assets/light-shadow-right.png';
import lightShadowLeft from '../../assets/light-shadow-left.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import {MovieContext} from '../../contexts/movie';

export default function Video() {

    const {currentMovie} = useContext(MovieContext);

    const [videos, setVideos] = useState([]);
    const [swipperChange, setSwipperChange] = useState(false);
    const [slides, setSlides] = useState(3.3);

    useEffect(() => {
        async function loadVideos() {
            const response = await api.get(`/movie/${currentMovie}/videos`, {
                params: {
                    api_key: 'dc8d1f407a1bd3c7756a115230fc20e7',
                    language: 'pt-BR',
                }
            })            
            setVideos(response.data.results.slice(0, 4));
        }

        loadVideos();
    }, [currentMovie])

    useEffect(() => {
        function handleRezise() {
            if(window.innerWidth < 400) {
                setSlides(1.07)
            }else if(window.innerWidth < 500) {
                setSlides(1.15)
            }else if(window.innerWidth < 600) {
                setSlides(1.8)
            }else if(window.innerWidth < 700) {
                setSlides(2)
            }else if(window.innerWidth < 800) {
                setSlides(2.2)
            }else if(window.innerWidth < 900) {
                setSlides(2.4)
            }else if(window.innerWidth < 1000) {
                setSlides(2.6)
            }else if(window.innerWidth < 1100) {
                setSlides(2.8)
            }else if(window.innerWidth < 1200) {
                setSlides(3.1)
            }else {
                setSlides(3.25)
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
        <>  
            {videos.length === 0? 
            ''
            :
                <Container>
                    <div className="section-header">
                        <h2>Vídeos</h2>
                        <span>{`(${videos.length})`}</span>
                        <button>Ver mais</button>
                    </div>

                    <div className="carousel">
                        {swipperChange && <img className="box-shadow-left" src={lightShadowLeft} />}
                        <Swiper 
                            className="video-list"
                            spaceBetween={15}
                            slidesPerView={slides}
                            onSlideChange={() => handleScrollCarousel()}
                        >
                            {videos.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <VideoItem video={item}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {videos.length > slides? <img className="box-shadow-right" src={lightShadowRight} /> : ''}
                    </div>

                </Container>
            }
        </>
    )
}