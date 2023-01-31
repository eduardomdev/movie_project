import React from "react"
import styles from './Footer.module.css'
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <footer id={styles.FooterContainer}>
            <ul>
                <li>
                    <a href="https://www.instagram.com/eduardo.macieln/"><FaInstagram></FaInstagram></a>
                </li>
                <li>
                    <a href="https://github.com/eduardomdev"><FaLinkedinIn></FaLinkedinIn></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/eduardo-maciel-463572264/"><FaGithub></FaGithub></a>
                </li>
            </ul>
            <p>
                <span>E.Movie</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer