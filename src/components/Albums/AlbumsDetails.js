import { useParams } from "react-router";
import useFetch from "../useFetch";

export default function AlbumsDetails() {

  const { id } = useParams();

  const { error, data: albums } = useFetch('http://localhost:8888/backend/albums.php')
  const { data: tracks } = useFetch('http://localhost:8888/backend/tracks.php')
  return (
    <>
      {/* Albums Details display */}
      { error && <div className="error">{error}</div>}
      { albums == null ? <div className="loading">Album Loading...</div> :
        <div className="albums-details">
          <img className="albums-details-image" alt={albums[id - 1].name} src={albums[id - 1].cover} />
          <p className="albums-details-description">{albums[id - 1].description}</p>
        </div>
      }
      {/* Tracks display */}
      { tracks == null ? <div className="loading">Tracks Loading...</div> :
        tracks.map(tracks => {
          return (
            (tracks.album_id == id ?
              <>
                <p className='tracks'>Tracks: {tracks.name}
                  <audio
                    controls

                    src={tracks.mp3}>
                  </audio>
                </p>
              </>
              : "")
          )
        })
      }
    </>
  );
}
