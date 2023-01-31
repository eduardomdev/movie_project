import styles from './SearchFilm.module.css'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function Search() {

    const [nameMovie, setNameMovie] = useState([]);

//UTILIZO SEARCHPARAMS PARA SELECIONAR O NOME PASSADO NA URL ('q'), PASSANDO O VALOR PARA A API DE BUSCA.

    const [SearchParams] = useSearchParams();
    
    const query = SearchParams.get('q');

    async function handleApi(){
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8cf957a02ed2c5b3a299ac17c62f1b88&query=${query}`)
        const responseJson = await response.json()
        const setJson = await setNameMovie(responseJson.results)
        return setJson
       }
    
       useEffect(() => {
    
        handleApi()
      }, [query])

// Hook NAVIGATE PARA IR PARA ROTA ESPECIFICADA / roadInfo = DEFINE UM LOCALSTORAGE PARA CADA FILME PERCORRIDO NO MAP
// ABAIXO, PASSANDO TODAS AS INFORMAÇÕES DE CADA ITEM DO ARRAY E DIRECIONA PARA A PAGE DE DESCRIÇÃO COM AS INFOS DOS
// FILMES      

      const navigate = useNavigate();

      const roadInfo = (item) => {
    
        localStorage.setItem('movieInfo', JSON.stringify(item))
        navigate(`/description?q=${item.title}`) 
      }

    return (
        <main id={styles.searchContainer} >
            <h2>Exibindo resultados de: {query}</h2>
                <div id={styles.showMovies} >
                    {nameMovie.length === 0 && <p>Carregando...</p>}
                    {nameMovie.length > 0 && 
                    nameMovie.map((item, index) => ( 
                    <div className={styles.containerTop} key={index}>
                        <img onClick={() => roadInfo(item)} loading='lazy' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt={item.title} />
                    </div> ))}
                </div>
        </main>
    )
}

export default Search