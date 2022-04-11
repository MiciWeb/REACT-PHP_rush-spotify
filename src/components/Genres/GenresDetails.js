import { useParams } from "react-router";
import useFetch from "../useFetch";

export default function GenresDetails() {

  const { id } = useParams();

  const { error, data: genres } = useFetch('http://localhost:8888/backend/Genres.php')
  const { data: genresDetails } = useFetch('http://localhost:8888/backend/GenresDetails.php')

  return (
    <>
      { genres == null ? <div className="loading">Genres Loading...</div> :
        <div>
          <h1 className="genre">{genres[id - 1].name}</h1>
        </div>
      }
      <div className="test">
        {genresDetails == null ? <div>Genres Loading...</div> :
          genresDetails.map(jointure => {
            return (<div>{jointure.genre_id == id ?
              <div className="cover"><a href={"http://localhost:3000/albums/" + jointure.id}><p>{jointure.album} </p><img src={jointure.cover_small}></img></a></div>
              : ""
            }</div>)
          })}
      </div>
    </>
  )
}
