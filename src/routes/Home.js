import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styles from "../stylecss/Home.module.css"

function Home() {
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
    <div className={styles.container}>
        {
        loading ? (
            <div className={styles.loader}>
                <h1>Loading...</h1> 
            </div>
        ) : (
            <div className={styles.movies}>
                {movies.map((movie) => (
                    <Movie 
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                ))}
            </div>
        )}
    </div>
    );
}

export default Home; 