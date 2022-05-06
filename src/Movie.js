import {useState, useEffect} from "react";

function Movie() {
    const [loading, setLoading] = useState(true);   // 페이지 로딩 상태
    const [movies, setMovies] = useState([]);       // 영화 정보

    const getMovies = async() => {
        //movies 정보 얻어오기
        const json = await (
         await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
            )
        ).json();
        
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        //getMovies 호출
        getMovies();
    }, []);
    console.log(movies);

    return (
    <div>
        {
        loading ? 
        <h1>Loading...</h1> : 
        <div>{movies.map((movie) => (
        //map에서 생성하는 값들은 key값이 있어야 매칭하여 값을 생성가능하다.    
        <div key={movie.id}>
            <img src = {movie.medium_cover_image}/>
            <h1>{movie.title}</h1>
            <p>{movie.summary}</p>
            <ul>               
                {/**genres는 배열이므로 값을 불러올때 map을 사용하여 불러온다.*
                 * key = {g}는 genres에서 가지고있는 고유 키값이 없으므로 
                 * 그냥 g의 고유 값을 사용하여 키값을 대체한다.
                * */}
                {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>))}
        </div>
        }
    </div>
    );
}

export default Movie;