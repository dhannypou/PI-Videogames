import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGameGenre, getGames, gamesFiteredByGenres, gamesFilteredByCreation, orderGame} from '../../redux/actions';
import AllGameCards from '../AllGameCards/AllGameCards';
import Filters from '../Filters/Filters';
import NavBar from '../NavBar/NavBar';
import Paginate from '../Paginate/Paginate';

import "./home.css";

const Home = () => {

    const dispatch = useDispatch();

    const allGames = useSelector((state) => state.games);

    const allGenres = useSelector((state) => state.genres);

    const [currentPage, setCurrentPage] = useState(1);

    const [gamesPage] = useState(15);

    const indexOfLastGame = currentPage * gamesPage;

    const indexOfFirstGame = indexOfLastGame - gamesPage;

    const currentGame = allGames.slice(indexOfFirstGame, indexOfLastGame); 

    const [Loader, setLoader] = useState(true);



    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getGameGenre());

    }, [dispatch]);

    useEffect(() => {
        if(!allGames.length) {
            dispatch(getGames()).then(() => setLoader(false));
        }
    }, [dispatch]);



    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage])



    const handleFilteredGenres = (e) => {
        dispatch(gamesFiteredByGenres(e.target.value));
        setCurrentPage(1);
    };

    const handleFilteredCreates = (e) => {
        dispatch(gamesFilteredByCreation(e.target.value));
    }

    const handleOrder = (e) => {
        e.preventDefault();
        if(e.target.value === ''){
            dispatch(getGames());
        } else {
            dispatch(orderGame(e.target.value))
            setCurrentPage(1)
        }
    }

    const reset = (e) => {
        e.preventDefault()
        dispatch(getGames())
        setCurrentPage(1)
    }


    return (
        <div className='fondo'>

            <NavBar />
            
            <Filters 
                handleOrder={handleOrder} 
                handleFilteredCreates = {handleFilteredCreates}
                handleFilteredGenres = {handleFilteredGenres}
                allGenres = {allGenres}
                reset = {reset}
            />
            <Paginate 
                gamesPage = {gamesPage} 
                allGames = {allGames.length} 
                paginate = {paginate} 
            />

            <AllGameCards 
                currentGame = {currentGame}
                allGames = {allGames}
            /> 
            
            
        </div>
    )
}

export default Home