import React, { useEffect, createContext, useState } from "react";

export const MovieContext = createContext({});

function MovieProvider({children}) {

    const [currentMovie, setCurrentMovie] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setCurrentMovie(346698);
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Para uma animação suave (opcional)
        });
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])

    function handleMovie(movieId) {
        setCurrentMovie(movieId);
    }

    return(
        <MovieContext.Provider
            value={{
                currentMovie,
                handleMovie,
                loading,
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider;