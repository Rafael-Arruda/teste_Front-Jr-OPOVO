import React, {useEffect, useState, useContext} from "react";
import { Container } from './style';

import ImagesItem from '../ImagesItem';

import lightShadowRight from '../../assets/light-shadow-right.png';
import lightShadowLeft from '../../assets/light-shadow-left.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import { MovieContext } from "../../contexts/movie";

export default function Poster() {

    const {currentMovie} = useContext(MovieContext);

    const [images, setImages] = useState([]);
    const [swipperChange, setSwipperChange] = useState(false);
    const [slides, setSlides] = useState(3.8);

    useEffect(() => {
        async function loadPosters() {
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzhkMWY0MDdhMWJkM2M3NzU2YTExNTIzMGZjMjBlNyIsInN1YiI6IjYyYWIyN2Y5MjJhZjNlNzFhMTMwZmZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqp4ZLzamoUlHH55BPMFBtH9lf56q4pJ3ePNHkQt0gU'
                }
            };
              
        fetch(`https://api.themoviedb.org/3/movie/${currentMovie}/images`, options)
            .then(response => response.json())
            .then(response => setImages(response.backdrops.slice(0, 5)))
            .catch(err => console.error(err));
        }

        loadPosters();
    }, [currentMovie]);

    useEffect(() => {
        function handleRezise() {
            if(window.innerWidth < 400) {
                setSlides(1.05)
            }else if(window.innerWidth < 500) {
                setSlides(1.2)
            }else if(window.innerWidth < 600) {
                setSlides(1.5)
            }else if(window.innerWidth < 700) {
                setSlides(1.8)
            }else if(window.innerWidth < 800) {
                setSlides(2.2)
            }else if(window.innerWidth < 900) {
                setSlides(2.5)
            }else if(window.innerWidth < 1000) {
                setSlides(2.8)
            }else if(window.innerWidth < 1100) {
                setSlides(3.2)
            }else if(window.innerWidth < 1200) {
                setSlides(3.5)
            }else {
                setSlides(3.8)
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
            <div className="section-header">
                <h2>Imagens de fundo</h2>
                <span>{`(${images.length})`}</span>
                <button>Ver mais</button>
            </div>
            <div className="carousel">
                {swipperChange && <img className="box-shadow-left" src={lightShadowLeft} />}
                <Swiper 
                    className="images-list"
                    slidesPerView={slides}
                    onSlideChange={() => handleScrollCarousel()}
                > 
                    {images.map((item) => (
                        <SwiperSlide key={item.file_path}>
                            <ImagesItem image={item}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <img className="box-shadow-right" src={lightShadowRight} />
            </div>
        </Container>
    )
}