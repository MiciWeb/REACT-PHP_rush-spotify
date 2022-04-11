import { useParams } from "react-router";
import useFetch from "../useFetch";

export default function ArtistesDetails() {

    const { id } = useParams();
    const { error, data: artists } = useFetch('http://localhost:8888/backend/artists.php')
    const { data: albums } = useFetch('http://localhost:8888/backend/albums.php')

    return (
        <>
            { error && <div className="error">{error}</div>}
            { artists == null ? <div className="loading">Album Loading...</div> :
                <div className="artiste_details">
                    <strong><p className="artiste_detail_description">{artists[id].name}</p></strong>
                    <img className="photo" src={artists[id].photo}></img>
                    <p className="artiste_detail_description">{artists[id].bio}</p>
                </div>
            }
            { albums == null ? <div className="loading">albums Loading...</div> :
                albums.map(albums => {
                    return (
                        (albums.artist_id == id ?
                            <>
                                <a href={"http://localhost:3000/albums/" + albums.id}><p className=''>albums: {albums.name}</p></a>
                            </>
                            : "")
                    )
                })
            }
        </>
    )
}
