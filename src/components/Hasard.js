import useFetch from "./useFetch";

export function Hasard() {
    const { data: albums } = useFetch('http://localhost:8888/backend/albums.php')

    return (
        <div>
            <div className="hasard">
                {console.log(albums)}
                {albums == null ? <div className="Chargement">Loading...</div> :
                    <div>
                        <p>{albums[Math.floor(Math.random() * 100)].name}</p>
                        <img className="cover" src={albums[Math.floor(Math.random() * 100)].cover_small}></img>
                   </div>
                }
            </div>
        </div>
    )
}


export default Hasard
