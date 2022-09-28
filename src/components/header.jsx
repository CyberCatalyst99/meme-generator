import React from 'react'
import HeadImg from '../assets/meme-head.png'

function Header() {
    return (
        <div className="header-wrap">
            <div className="logo">
               <img src={ HeadImg } /> 
               <h2 id="meme-generator">Meme Generator</h2>
               
            </div>
            <p id="header-p">React Course - Project 3</p>
        </div>
    )
}

export default Header