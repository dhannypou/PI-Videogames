import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getGameName } from '../../redux/actions'
import searchLogo from '../../images/search.png'
import "./searchBar.css"

const SearchBar = () => {
  
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };
  
    const handleButtonSubmit = (e) => {
        e.preventDefault();
        dispatch(getGameName(name));
        setName('');
    }

    return (
        <form className='form-search-cnt'>
            <input 
                type="text" 
                placeholder='Buscar videojuego...'
                onChange={e => handleInputChange(e)}
            />
            <button 
                type='submit'
                onClick={e => handleButtonSubmit(e)}
            >
                <img src={searchLogo} alt="search icon" />
            </button>
        </form>
    )
}

export default SearchBar