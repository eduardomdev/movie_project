import React, { useEffect, useState } from "react"
import styles from './Upcoming.module.css'
import { useNavigate } from "react-router-dom"

function Upcoming(){

//LOGICA PRINCIPAL DO CODIGO ABAIXO: UTILIZO O MAP PARA PERCORRER O ARRAY (upcoming) RECEBIDO APARTIR DA API ABAIXO
//(FETCH/ASYNC/AWAIT E UseEffect utilizados) RETORNANDO AS INFORMAÇÕES DE CADA ITEM CONTIDO NELE.

    const [upcoming, setUpcoming] = useState([])

    async function handleApi(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/${'upcoming'}?api_key=8cf957a02ed2c5b3a299ac17c62f1b88`)
    const responseJson = await response.json()
    const setJson = await setUpcoming(responseJson.results)
    return setJson
   }

   useEffect(() => {

    handleApi()
  }, [])

// Hook NAVIGATE PARA IR PARA ROTA ESPECIFICADA / roadInfo = DEFINE UM LOCALSTORAGE PARA CADA FILME PERCORRIDO NO MAP
// ABAIXO, PASSANDO TODAS AS INFORMAÇÕES DE CADA ITEM DO ARRAY E DIRECIONA PARA A PAGE DE DESCRIÇÃO COM AS INFOS DOS
// FILMES


  const navigate = useNavigate();

  const roadInfo = (item) => {

    localStorage.setItem('movieInfo', JSON.stringify(item))
    navigate(`/description?q=${item.title}`)
    
  }

    return(
        <main id={styles.Upcoming}>
            {upcoming.map((item, index) => ( 
                <div className={styles.containerUpcoming} key={index}>
                        <img onClick={() => roadInfo(item)} loading='lazy' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt={item.title} />
                </div> ))}
        </main>
    )
}

export default Upcoming