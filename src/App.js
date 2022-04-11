import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Albums from "./components/Albums/Albums.js"
import Artistes from "./components/Artistes/Artistes.js"
import AlbumsDetails from "./components/Albums/AlbumsDetails.js"
import Genres from "./components/Genres/Genres.js"
import GenresDetails from "./components/Genres/GenresDetails.js"
import ArtistesDetails from "./components/Artistes/ArtistesDetails.js"
import Hasard from "./components/Hasard.js";

function App() {

  return (
    <>
      <div className="nav">
        <h2>
          Wacify
      </h2>
        <Router>
          <Link to="/">
            <p> Home </p>
          </Link>
          <Link to="/albums">
            <p> Albums </p>
          </Link>
          <Link to="/genres">
            <p> Genres </p>
          </Link>
          <Link to="/artistes">
            <p> Artistes </p>
          </Link>
          <Route exact={true} path="/" component={Hasard} />
          <Route exact={true} path="/albums" component={Albums} />
          <Route exact={true} path="/albums/:id" component={AlbumsDetails} />
          <Route exact={true} path="/genres" component={Genres} />
          <Route exact={true} path="/genres/:id" component={GenresDetails} />
          <Route exact={true} path="/artistes" component={Artistes} />
          <Route exact={true} path="/artistes/:id" component={ArtistesDetails} />
        </Router>
      </div>

    </>
  );
}
export default App;