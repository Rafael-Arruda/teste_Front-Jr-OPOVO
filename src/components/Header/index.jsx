import React, { useState } from "react";

import { Container } from './style';

import Logo from '../../assets/logo-light.png';

import {MdMenu, MdClose} from 'react-icons/md';

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);

    function handleMenu() {
        setShowMenu(!showMenu)
    }

    return(
        <Container>
            <div className="container-menu grid-1240">
                <div className="logo">
                    <img src={Logo} alt="logo play cube" />
                </div>

                <div className="menu-hamburguer">
                    {showMenu? <MdClose onClick={handleMenu} size={30} color="#fff"/> : <MdMenu onClick={handleMenu} size={30} color="#fff"/>}
                </div>

                <nav className="navigation-menu">
                    <a href="#">Filmes</a>
                    <a href="#">Séries</a>                
                </nav>

                {showMenu &&  
                    <nav className="navigation-menu-mobile">
                        <a href="#">Filmes</a>
                        <a href="#">Séries</a>   
                    </nav>
                }
            </div>
        </Container>
    )
}