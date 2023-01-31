import { useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import styles from './TopRated.module.css'

function TopRated(){

//LOGICA PRINCIPAL DO CODIGO ABAIXO: UTILIZO O MAP PARA PERCORRER O ARRAY (topRate) RECEBIDO APARTIR DA API ABAIXO
//(FETCH/ASYNC/AWAIT E UseEffect utilizados) RETORNANDO AS INFORMAÇÕES DE CADA ITEM CONTIDO NELE.

    const [topRate, setTopRate] = useState([])

    async function handleApi(){
    const response = await fetch(`https://api.themoviedb.org/3/movie/${'top_rated'}?api_key=8cf957a02ed2c5b3a299ac17c62f1b88`)
    const responseJson = await response.json()
    const setJson = await setTopRate(responseJson.results)
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
        <main id={styles.TopRated}>
            {topRate.map((item, index) => ( 
            <div className={styles.containerTop} key={index}>
                    <img onClick={() => roadInfo(item)} loading='lazy' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt={item.title} />
            </div> ))}
        </main>
    )
}

export default TopRated     