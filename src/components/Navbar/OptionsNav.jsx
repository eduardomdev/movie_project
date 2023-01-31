import { FaSistrix } from "react-icons/fa";
import {Link} from 'react-router-dom'

function OptionsNav({search, setSearch, handleSubmit, IdStyle, handleToggle}){

    return(
     <>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder='Search a movie!'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            />
            <button><FaSistrix></FaSistrix></button>
        </form>
        <ul id={IdStyle}>
            <li><Link onClick={handleToggle} to="/">Home</Link></li>
            <li><Link onClick={handleToggle} to="/popular">Popular</Link></li>
            <li><Link onClick={handleToggle} to="/nowplaying">Now Playing</Link></li>
            <li><Link onClick={handleToggle} to="/upcoming">Upcoming</Link></li>
            <li><Link onClick={handleToggle} to="/toprated">Top Rated</Link></li>
        </ul>
     </>
    )
}

export default OptionsNav