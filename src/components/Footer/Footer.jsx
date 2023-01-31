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
                    <FaLinkedinIn></FaLinkedinIn>
                </li>
                <li>
                    <FaGithub></FaGithub>
                </li>
            </ul>
            <p>
                <span>E.Movie</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer