import { useSelector } from 'react-redux'
import './GiphList.css'

const GiphList = () => {
    const reduxStore = useSelector(store => store.giphList)

    return (
        <div className='all-gifs'>
            {reduxStore.map((gif, index) =>(
                <div className='gif-box' key={index}>
                    <img  src={gif}/>
                    <button>Add to Favorites!</button>
                </div>           
            ))}
        </div>
    )
}

export default GiphList