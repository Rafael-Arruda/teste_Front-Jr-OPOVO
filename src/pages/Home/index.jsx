import React, { useContext } from "react";

import Main from "../../components/Main";
import Featured from "../../components/Featured";
import Cast from '../../components/Cast';
import Review from "../../components/Review";
import Media from "../../components/Media";
import Recommendations from "../../components/Recommendations";

import { MovieContext } from "../../contexts/movie";

import Loading from '../../components/Loading';

export default function Home() {
    
    const { loading } = useContext(MovieContext);
    
    return(
        <>
            {loading? 
                <Loading/>
            : 
                <Main>
                    <Featured/>
                    <Cast/>
                    <Review/>
                    <Media/>

                    <Recommendations/>
                </Main>
            }
        </>
    )
}