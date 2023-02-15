import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getGameDetails } from '../../redux/actions'
import Loading from '../Loading/Loading'
import "./gameDetail.css"



const GameDetail = () => {

    const dispatch = useDispatch();
    let detailGame = useSelector(state => state.game);
    const { id } = useParams();
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        dispatch(getGameDetails(id)).then(() => setLoader(false));
    }, [dispatch, id])


    if (loader) {
        return <Loading />
    }


        return (
            <div className='gameDetail-cnt'>
                <div className='detail-cnt--general'>

                    <div className='detail-cnt-name'>
                        <h1>{detailGame.name}</h1>
                    </div>

                    <div className='detail-cnt-info'>
                        <div>
                            <img src={detailGame.image || detailGame.background_image} alt={`Imagen de ${detailGame.name}`} title={`Imagen de ${detailGame.name} `} width='600px' />
                        </div>

                        <div className='detail-cnt-info--desc'>
                            <div>
                                <h2>Generos:</h2>

                                <div>
                                    {
                                        <p>
                                            {
                                                detailGame.genres.every(e => typeof e === "string") ?
                                                    detailGame.genres?.map(gen => gen).join(" | ")
                                                    : detailGame.genres?.map(gen => gen.name).join(" | ")

                                            }
                                        </p>
                                    }
                                </div>
                            </div>

                            <div>
                                <h2>Descripcion:</h2>
                                <p>
                                    {
                                        detailGame.description
                                    }
                                </p>
                            </div>

                            <div>
                                {
                                    detailGame.released ?
                                        <h3>Fecha de lanzamiento: <span>{detailGame.released}</span></h3>
                                        : <p>Sin datos sobre la fecha de lanzamiento del juego</p>
                                }
                            </div>

                            <div>
                                {
                                    detailGame.rating ?
                                        <h3>Rating: <span>{detailGame.rating}⭐</span></h3>
                                        : <p>Sin datos sobre el rating del juego</p>
                                }
                            </div>

                            <div>
                                <h3>Plataformas:</h3>
                                <div>
                                    {
                                        !Array.isArray(detailGame.platforms) ? <p>{detailGame.platforms}</p>
                                            : <p>{detailGame.platforms?.map(p => p)}</p>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='detail-cnt-back'>
                        <Link className='detail-back-link' to='/home'>
                            <div> BACK </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    
}

export default GameDetail