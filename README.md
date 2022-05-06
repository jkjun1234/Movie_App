React App Project 첫번째 Movie App 
보여지는 movie 포스터를 클릭시 
movie 정보에 대해 알 수 있는 웹앱 #   M o v i e _ A p p 
 
 
## Movies.js -> line7 부분

    useEffect(() => {
        fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )
        .then((response) => response.json())
        .then((json) => {
            setMovies(json.data.movies);
            setLoading(false);
        });

## .then 대신 async-await를 사용할 수 있다.
## 위 코드의  .then 대신 async-await를 사용한 예는 아래와 같다.
1) 
  const getMovies = async() => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        //getMovies 호출
        getMovies();
    }, []);


2)   1)예시를 간소화한 코드
const getMovies = async() => {
        const json = await (
         await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )).json();
        
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        //getMovies 호출
        getMovies();
    }, []);