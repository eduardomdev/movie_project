import { useRef } from "react";
import styles from './Pages.module.css'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function Pages({setAtualPage, page}){
    

    const scrollPages = useRef(null);

    const saveLocalPage = (item) => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        setAtualPage(item)
    }

    const clickRight = (e) => {
        e.preventDefault();

        scrollPages.current.scrollLeft += scrollPages.current.offsetWidth
    }
    
    const clickLeft = (e) => {
        e.preventDefault();

        scrollPages.current.scrollLeft -= scrollPages.current.offsetWidth
    }

    return(
        <div id={styles.containerPages}>
            <button onClick={clickLeft}><FaAngleLeft></FaAngleLeft></button>
            {( <div id={styles.paginationSpace} ref={scrollPages}>
                    <ul id={styles.pagination}>
                        {page.map((item, index) => <li key={index} onClick={() => saveLocalPage(item)}>{item}</li>)}
                    </ul> 
                </div>)}
            <button onClick={clickRight}><FaAngleRight></FaAngleRight></button>
        </div>
    )
}

export default Pages