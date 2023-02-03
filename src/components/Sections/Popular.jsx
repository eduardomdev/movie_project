import React, { useEffect, useState } from "react"
import styles from './Popular.module.css'
import { useNavigate } from "react-router-dom"
import Pages from "./Pages"

function Popular(){

//LOGICA PRINCIPAL DO CODIGO ABAIXO: UTILIZO O MAP PARA PERCORRER O ARRAY (popular) RECEBIDO APARTIR DA API ABAIXO
//(FETCH/ASYNC/AWAIT E UseEffect utilizados) RETORNANDO AS INFORMAÇÕES DE CADA ITEM CONTIDO NELE.

    const [popular, setPopular] = useState([])
    const [atualPage, setAtualPage] = useState(1);
    const [page, setPage] = useState([]);
    
    async function handleApi(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/${'popular'}?api_key=8cf957a02ed2c5b3a299ac17c62f1b88&page=${atualPage}`)
    const responseJson = await response.json()

    const arrayPage = []
    for(let i = 0; i <= 200; i++){
        arrayPage.push(i + 1)
    }

    setPopular(responseJson.results)
    setPage(arrayPage)
   }

    useEffect(() => {

      handleApi()   

    }, [atualPage])


// Hook NAVIGATE PARA IR PARA ROTA ESPECIFICADA / roadInfo = DEFINE UM LOCALSTORAGE PARA CADA FILME PERCORRIDO NO MAP
// ABAIXO, PASSANDO TODAS AS INFORMAÇÕES DE CADA ITEM DO ARRAY E DIRECIONA PARA A PAGE DE DESCRIÇÃO COM AS INFOS DOS
// FILMES

  const navigate = useNavigate();
    
  const roadInfo = (item) => {

    localStorage.setItem('movieInfo', JSON.stringify(item))
    navigate(`/description?q=${item.title}`)
    
  }


    return(
        popular.length === 0 ? 
        <main id={styles.Popular}>
          <div className={styles.ldsDualRing}></div> 
        </main> :
        <main id={styles.Popular}>
            <div id={styles.containerMovies}>
              {popular.map((item, index) => ( 
              <div className={styles.containerPopular} key={index}> 
                          <img onClick={() => roadInfo(item)} loading='lazy' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt={item.title} />
              </div> ))}
            </div>
            <Pages setAtualPage={setAtualPage} page={page}></Pages>
        </main>
    )
}

export default Popular