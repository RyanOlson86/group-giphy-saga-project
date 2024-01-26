import { useSelector } from 'react-redux'
import './GiphList.css'
import { useDispatch } from 'react-redux'


const GiphList = () => {
    const reduxStore = useSelector(store => store.giphList)
    const dispatch = useDispatch()

    const addFavorite = (event) => {
        // console.log('Add Favorite', event.target.id)

        dispatch({type: 'ADD_FAVORITE', payload: event.target.id})

    }

    return (
        <div className='all-gifs'>
            {reduxStore.map((gif, index) =>(
                <div className='gif-box' key={index}>
                    <img  src={gif}/>
                    <button onClick={addFavorite} id={gif}>Add to Favorites!</button>
                </div>           
            ))}
        </div>
    )
}

export default GiphList