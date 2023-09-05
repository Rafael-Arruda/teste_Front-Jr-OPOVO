import React from "react";

import { Container } from './style';
import Logo from '../../assets/logo-dark.png';

export default function Footer(){
    return(
        <Container>
            <div className="footer-container grid-1240">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>

                <div className="footer-navigation">
                    <ul>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Adicionar um filme</a></li>
                        <li><a href="#">Termos de Uso</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Adicionar um série</a></li>
                        <li><a href="#">Políticas de privacidade</a></li>
                        <li><a href="#">Suporte</a></li>
                        <li><a href="#">Discussões</a></li>
                        <li><a href="#">Diretrizes</a></li>
                    </ul>
                </div>
            </div>

        </Container>
    )
}