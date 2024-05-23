import React from "react";

export function Navibar() {
    return (
        <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/Home">Home</a></li>
            <li><a href="/About">sobre</a></li>
            <li><a href="/Contact">Contato</a></li>
            </ul>
        </div>
        </nav>
    );
    
   
   }