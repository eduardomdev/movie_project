import React from "react"
import styles from './InfoFilm.module.css'
import { FaStar } from "react-icons/fa";

function InfoFilm(){

//PEGA OS DADOS PASSADOS AO LOCALSTORAGE > PASSA PARA JSON E O UTILIZA PARA PASSAR AS INFORMAÇÕES DO FILME

    const movieInfo = JSON.parse(localStorage.getItem('movieInfo'))
    
    return(
        <main 
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieInfo.backdrop_path})`}} 
        id={styles.ContainerInfoFilm}>
            <div id={styles.ContainerColorFilm}>
                <div className={styles.containerImg}>
                    <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movieInfo.poster_path}`} alt={movieInfo.title} />
                </div>
                <div className={styles.containerText}>
                    <h1>{movieInfo.title}</h1>
                    <div className={styles.orderSubInfo}>
                        <div className={styles.avaregeNota}><FaStar id={styles.Star}></FaStar><h5>{movieInfo.vote_average}</h5></div>
                        <h5>{movieInfo.release_date}</h5>
                        <h5>{movieInfo.original_language.toUpperCase()}</h5>
                    </div>
                    <p>{movieInfo.overview}</p>
                </div>
            </div>
        </main>
    )
}

export default InfoFilm