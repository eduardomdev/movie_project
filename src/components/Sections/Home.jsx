import React, { useEffect, useRef, useState } from "react"
import styles from './Home.module.css'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home(){

    const [today, setToday] = useState([])

    const carousel = useRef(null);

    const [changeDayWeek, setChangeDayWeek] = useState('day');

// EXECUTA O UseEffect SEMPRE QUE ALTERAR OS TRENDINGS "DAY/WEEK" SETADOS NO UseState "changeDayWeek"
// e chamados nos buttons da div  que contem o TRENDING 

    async function handleApi(){
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/${changeDayWeek}?api_key=8cf957a02ed2c5b3a299ac17c62f1b88`)
        const responseJson = await response.json()
        const setJson = await setToday(responseJson.results)
        return setJson
       }
    
       useEffect(() => {
    
        handleApi()

      }, [changeDayWeek])

// UTILIZO O UseRef(carousel) PARA PEGAR O TAMANHO DO DEVICE E CRIAR O EFEITO DO CARROUSEL.

      const clickRight = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth
      }

      const clickLeft = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
      }

// Hook NAVIGATE PARA IR PARA ROTA ESPECIFICADA / roadInfo = DEFINE UM LOCALSTORAGE PARA CADA FILME PERCORRIDO NO MAP
// ABAIXO, PASSANDO TODAS AS INFORMAÇÕES DE CADA ITEM DO ARRAY E DIRECIONA PARA A PAGE DE DESCRIÇÃO COM AS INFOS DOS
// FILMES


//LOGICA PRINCIPAL DO CODIGO ABAIXO: UTILIZO O MAP PARA PERCORRER O ARRAY (today) RECEBIDO APARTIR DA API ACIMA
//(FETCH/ASYNC/AWAIT E UseEffect utilizados) RETORNANDO AS INFORMAÇÕES DE CADA ITEM CONTIDO NELE.

      const navigate = useNavigate();

      const roadInfo = (item) => {

        localStorage.setItem('movieInfo', JSON.stringify(item))
        navigate(`/description?q=${item.title}`)
        
      }

    return(
        today.length === 0 ? 
            <section id={styles.HomeSection}>
                        <div className={styles.ldsDualRing}></div> 
            </section>
            :
            <main id={styles.HomeSection}>
                <section id={styles.HomeSearchFilm}>
                    <div id={styles.blurImage}>
                        <div id={styles.HomeText}>
                            <h1>Welcome.</h1>
                            <h2>Millions of movies to discover. Explore now.</h2>
                        </div>
                    </div>
                </section>
                <section id={styles.HomeCarouselFilm}>
                    <div id={styles.sectionButtonToday}>
                        <p>Trending</p>
                        <button onClick={() => setChangeDayWeek('day')}>Today</button>
                        <button onClick={() => setChangeDayWeek('week')} >Week</button>
                    </div>
                    <div id={styles.sectionShowFilms}>
                        <button className={styles.arrowClick} onClick={clickLeft}><FaAngleLeft></FaAngleLeft></button>
                            <div id={styles.scrollFilms} ref={carousel} >
                                {today.map((item, index) => ( 
                                <div className={styles.containerTop} key={index}>
                                    <img onClick={() => roadInfo(item)} loading='lazy' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt={item.title} />
                                </div> ))}
                            </div>
                        <button className={styles.arrowClick}  onClick={clickRight}><FaAngleRight></FaAngleRight></button>
                    </div>
                </section>
            </main>
    )
}

export default Home