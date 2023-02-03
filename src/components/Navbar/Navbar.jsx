import {Link, useNavigate} from 'react-router-dom'
import styles from './Navbar.module.css'
import popcorn from '../img/popcorn.png'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import OptionsNav from './OptionsNav';


function Navbar(){

//HANDLETOGGLE DEFINE SE O MENU RESPONSIVO ESTA ABERTO OU FECHADO

    const [search, setSearch] = useState('');

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

//NAVIGATE PARA NAVEGAÇÃO E HANDE SUBMIT VALIDA SE O INPUT ESTA VAZIO, MUDA O ESTADO DO MENU(ABERTO/FECHADO) E DIRECIONA
//PARA PAGINA DE BUSCA. 
    
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()

        if(!search) return

        handleToggle()
        navigate(`./Search?q=${search}`)
        setSearch('');
    }

    return(
        <nav id={styles.NavBarContainer}>
            <div id={styles.IconNavbar}>
                <Link to="/"><img src={popcorn} alt="popcorn.img" /></Link>
            </div>
            
            <div id={styles.InputNavBar} >
                <OptionsNav 
                    search={search} 
                    setSearch={setSearch} 
                    handleSubmit={handleSubmit}  
                    IdStyle={styles.NavBarList}>
                </OptionsNav>
            </div>

            <button onClick={handleToggle} className={styles.dropdownButton}><FaBars></FaBars></button>

            <div id={isOpen == true ?  styles.dropDownActive : styles.dropDownDesactive } >
                <OptionsNav 
                    search={search} 
                    setSearch={setSearch} 
                    handleSubmit={handleSubmit} 
                    IdStyle={styles.dropListDesactive}
                    handleToggle={handleToggle}>  
                </OptionsNav>
            </div>
        </nav>
    )
}

export default Navbar