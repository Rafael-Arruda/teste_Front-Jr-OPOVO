import React from "react";
import './global.css';

import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import RoutesApp from "./routes";

import MovieProvider from "./contexts/movie";

export default function App() {
  return(
    <MovieProvider>
      <RoutesApp/>
    </MovieProvider>
  )
}