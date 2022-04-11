import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import useFetch from "../useFetch";
import { useState } from "react"

export default function Albums() {
  const { error, data: albums } = useFetch('http://localhost:8888/backend/albums.php')

  const [name, setName] = useState("")
  const handleInput = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="albums">
      <input
        onChange={handleInput}
        placeholder="Recherche"
      />
      <h3>Albums :</h3>

      { error && <div className="Erreur">{error}</div>}
      <div className="test">
        {albums == null ? <div className="Chargement">Loading...</div> :
          albums.map(albums => {
            if (albums.name.toLowerCase().indexOf(name.toLowerCase()) === -1) {
              return
            }
            return (
              <Link to={{ pathname: `/albums/${albums.id}` }}>
                <p>{albums.name}</p>
                <img className="cover" src={albums.cover_small}></img>
              </Link>
            )

          })
        }

      </div>
    </div>
  );
}

