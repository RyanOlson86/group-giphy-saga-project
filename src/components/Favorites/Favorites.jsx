import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import '../GiphList/GiphList.css'
import FavoriteItem from '../FavoriteItem/FavoriteItem'


const FavoriteList = () => {
    const reduxStore = useSelector(store => store.favoriteList)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch({type: 'FETCH_FAVORITES'})
    }, [])

    return (
        <div className='all-gifs'>
            {reduxStore.map(gif => (
                <FavoriteItem gif={gif}/>
            ))}
        </div>
    )
}

export default FavoriteList