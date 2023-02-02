import { useRef } from 'react';
import { useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import styles from './TopRated.module.css'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Pages from './Pages';

function TopRated(){

//LOGICA PRINCIPAL DO CODIGO ABAIXO: UTILIZO O MAP PARA PERCORRER O ARRAY (topRate) RECEBIDO APARTIR DA API ABAIXO
//(FETCH/ASYNC/AWAIT E UseEffect utilizados) RETORNANDO AS INFORMAÇÕES DE CADA ITEM CONTIDO NELE.

    const [topRate, setTopRate] = useState([])
    const [atualPage, setAtualPage] = useState(1);
    const [page, setPage] = useState([]);
    
    async function handleApi(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/${'top_rated'}?api_key=8cf957a02ed2c5b3a299ac17c62f1b88&page=${atualPage}`)
    const responseJson = await response.json()

    const arrayPage = []
    for(let i = 0; i <= responseJson.total_pages; i++){
        arrayPage.push(i + 1)
    }

    setTopRate(responseJson.results)
    setPage(arrayPage)
   }

    useEffect(() => {

      handleApi()   

    }, [atualPage])

// Hook NAVIGATE PARA IR PARA ROTA ESPECIFICADA / roadInfo = DEFINE UM LOCALSTORAGE PARA CADA FILME PERCORRIDO NO MAP

    const navigate = useNavigate();

    const roadInfo = (item) => {
  
      localStorage.setItem('movieInfo', JSON.stringify(item))
      navigate(`/description?q=${item.title}`)
      
    }

    return(
        <main id={styles.TopRated}>
            {topRate.map((item, index) => ( 
            <div className={styles.containerTop} key={index}>
                    <img onClick={() => roadInfo(item)} loading='lazy' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt={item.title} />
            </div> ))}
            <Pages setAtualPage={setAtualPage} page={page}></Pages>
        </main>
    )
}

export default TopRated     