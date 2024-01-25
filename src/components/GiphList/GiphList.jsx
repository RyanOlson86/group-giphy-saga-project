import { useSelector } from 'react-redux'

const GiphList = () => {
    const reduxStore = useSelector(store => store.giphList)

    return (
        <div>
            {reduxStore.map((gif, index) =>(
                <img key={index} src={gif}/>
                // <div>{gif}</div>
            ))}
        </div>
    )
}

export default GiphList