import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import '../GiphList/GiphList.css'


const FavoriteList = () => {
    const reduxStore = useSelector(store => store.favoriteList)
    const dispatch = useDispatch()
    const [newInput, setNewInput] = useState('')

    useEffect(()=>{
        dispatch({type: 'FETCH_FAVORITES'})
    }, [])

    
    const handleUpdate = () => {
        console.log('in handleupdate', event.target.id);
        dispatch({type : 'UPDATE_CATEGORY', payload : {
            gifId: event.target.id,
            catId: newInput
        }})
        setNewInput('')

    }

    return (
        <div className='all-gifs'>
            {reduxStore.map(gif => (
                <div className='gif-box' key={gif.id}>
                    <img src={gif.url}/>
                    <div>Category: {gif.name}</div>
                    <input onChange={(event)=>setNewInput(event.target.value)} value={newInput} placeholder="New Category"></input>
                    <button id={gif.id} onClick={(handleUpdate)}>Update Category</button>
                </div>
            ))}
        </div>
    )
}

export default FavoriteList