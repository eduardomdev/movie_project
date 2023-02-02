import React, { useEffect, useState } from "react"
import styles from './Upcoming.module.css'
import { useNavigate } from "react-router-dom"
import Pages from "./Pages"

function Upcoming(){

//LOGICA PRINCIPAL DO CODIGO ABAIXO: UTILIZO O MAP PARA PERCORRER O ARRAY (upcoming) RECEBIDO APARTIR DA API ABAIXO
//(FETCH/ASYNC/AWAIT E UseEffect utilizados) RETORNANDO AS INFORMAÇÕES DE CADA ITEM CONTIDO NELE.

    const [upcoming, setUpcoming] = useState([])
    const [atualPage, setAtualPage] = useState(1);
    const [page, setPage] = useState([]);
    
    async function handleApi(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/${'upcoming'}?api_key=8cf957a02ed2c5b3a299ac17c62f1b88&page=${atualPage}`)
    const responseJson = await response.json()

    const arrayPage = []
    for(let i = 0; i <= responseJson.total_pages; i++){
        arrayPage.push(i + 1)
    }

    setUpcoming(responseJson.results)
    setPage(arrayPage)
   }

    useEffect(() => {

      handleApi()   

    }, [atualPage])

  const navigate = useNavigate();

  const roadInfo = (item) => {

    localStorage.setItem('movieInfo', JSON.stringify(item))
    navigate(`/description?q=${item.title}`)
    
  }

    return(
        upcoming.length === 0 ? 
        <main id={styles.Upcoming}>
          <div className={styles.ldsDualRing}></div> 
        </main>
      :
        <main id={styles.Upcoming}>
            {upcoming.map((item, index) => ( 
                <div className={styles.containerUpcoming} key={index}>
                        <img onClick={() => roadInfo(item)} loading='lazy' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt={item.title} />
                </div> ))}
                <Pages setAtualPage={setAtualPage} page={page} ></Pages>
        </main>
    )
}

export default Upcoming