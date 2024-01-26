import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import '../GiphList/GiphList.css'
import FavoriteItem from '../FavoriteItem/FavoriteItem'


const FavoriteList = () => {
    const favoriteStore = useSelector(store => store.favoriteList)
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch({type: 'FETCH_FAVORITES'})
        dispatch({type: 'FETCH_CATEGORIES'})
    }, [])

    return (
        <div className='all-gifs'>
            {/* <div>
            {categoryStore.map(cat => (
                <div>{cat.id}  {cat.name}</div>
            ))}
            </div> */}
            

            {favoriteStore.map(gif => (
                <FavoriteItem gif={gif} key={gif.id}/>
            ))}
        </div>
    )
}

export default FavoriteList