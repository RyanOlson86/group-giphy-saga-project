import GiphList from "../GiphList/GiphList";
import SearchGiphs from "../SearchGiphs/SearchGiphs";
import './App.css'



function App() {

  return (
    <div className="app">
      <h1>Giphy Search!</h1>
      <SearchGiphs />
      <GiphList />
    </div>
  );
}


export default App;
