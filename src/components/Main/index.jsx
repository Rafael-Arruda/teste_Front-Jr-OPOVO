import React from "react";
import './main.css';

export default function Main({children}) {
    return(
        <main>
            <div>
                {children}
            </div>
        </main>
    )
}