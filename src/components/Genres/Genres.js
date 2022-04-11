import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import useFetch from "../useFetch";
import { useState } from "react"

export default function Genres() {
  const { error, data: genres } = useFetch('http://localhost:8888/backend/Genres.php')

  const [name, setName] = useState("")
  const handleInput = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="genres">
      <h3>Albums :</h3>
      <input
        onChange={handleInput}
        placeholder="Recherche"
      />
      { error && <div className="Erreur">{error}</div>}
      { genres == null ? <div className="Chargement">Loading...</div> :
        genres.map(genres => {
          if (genres.name.toLowerCase().indexOf(name.toLowerCase()) === -1) {
            return
          }
          return (
            <Link to={{ pathname: `/genres/${genres.id}` }}>
              <p>{genres.name}</p>
            </Link>
          )
        })
      }
    </div>
  );
}





