import React from 'react'
import {
    Link
} from 'react-router-dom';
import useFetch from "../useFetch";
import { useState } from "react"

export default function Artistes() {
    const { error, data: artists } = useFetch('http://localhost:8888/backend/artists.php')

    const [name, setName] = useState("")
    const handleInput = (e) => {
        setName(e.target.value)
    }

    return (
        <div className="artists">
            <h3>Artistes :</h3>
            <input
                onChange={handleInput}
                placeholder="Recherche"
            />
            { error && <div className="Erreur">{error}</div>}
            { artists == null ? <div className="Chargement">Loading...</div> :
                artists.map(artists => {
                    if (artists.name.toLowerCase().indexOf(name.toLowerCase()) === -1) {
                        return
                    }
                    return (
                        <Link to={{ pathname: `/artistes/${artists.id}` }} >
                            <p>{artists.name}</p>
                        </Link>
                    )
                })
            }
        </div>
    );
}

