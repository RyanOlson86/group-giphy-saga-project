import FavoriteList from "../Favorites/Favorites";
import GiphList from "../GiphList/GiphList";
import SearchGiphs from "../SearchGiphs/SearchGiphs";
import './App.css'
import { HashRouter as Router, Route, Link } from "react-router-dom/cjs/react-router-dom.min";



function App() {

  return (
    <div className="app">
      <Router>
        <Route path='/' exact>
          <h1>Giphy Search!</h1>
          <Link to="/">Search</Link>
          <Link to="/favorites">Favorites</Link>
          <SearchGiphs />
          <GiphList />
        </Route>

        <Route path='/favorites'>
          <h2>Favorites</h2>
          <Link to="/">Search</Link>
          <Link to="/favorites">Favorites</Link>
          <FavoriteList />
        </Route>
      </Router> 
    </div>
  );
}


export default App;
