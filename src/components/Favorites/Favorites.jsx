import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import '../GiphList/GiphList.css'


const FavoriteList = () => {
    const reduxStore = useSelector(store => store.favoriteList)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({type: 'FETCH_FAVORITES'})
    }, [])


    return (
        <div className='all-gifs'>
            {reduxStore.map(gif => (
                <div className='gif-box' key={gif.id}>
                    <img src={gif.url}/>
                    <div>Category: {gif.name}</div>
                </div>
            ))}
        </div>
    )
}

export default FavoriteList