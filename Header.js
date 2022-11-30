import React from "react"
import ReactDOM from "react-dom"

export default function Header() {
    return (
        <header>
            <img className="main-image" src="./images/Picture.png" alt="Portrait of me"/>
            <h1>Laura Smidt</h1>
            <h3>Frontend Developer</h3>
            <small>laurasmidt.website</small><br/>
            <div className="buttons">
                <a href="#" className="email"><img src="./images/Email.svg" alt="E-mail icon"/>E-mail</a>
                <a href="#" className="linkedin"><img src="./images/LinkedIn.svg" alt="LinkedIn icon"/>LinkedIn</a>
            </div>
        </header>
        )
}