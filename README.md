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


## react-router-dom 5버전 -> 버전6 바뀐 부분

1. Switch컴포넌트가 Routes컴포넌트로 대체되었습니다.
Switch -> Routes

2. Route컴포넌트 사이에 자식 컴포넌트를 넣지 않고, element prop에 자식 컴포넌트를 할당하도록 바뀌었습니다.
Route path="/" element={< Home / >}

react-router-dom 6버전 문서
https://reactrouter.com/docs/en/v6/getting-started/overview