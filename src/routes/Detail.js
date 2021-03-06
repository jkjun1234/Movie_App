/**
 * Code Challenge
 * Detail Page를 완성하라
 * 아래에서 주워진 Json 정보를 이용하여 상세내역을 확인하는 것을 해보자.
 * Detail.js Route에서 Detail 컴포넌트를 불러오자!.
 * 1. Detail 컴포넌트 제작하기 파일명은 MovieDetail
 */


import { useParams } from "react-router-dom";
// URL 의 변수 값을 확인 할수 있는 함수 
// 여기선 movie/:id 값에서 넘어온 id 값을 확인 하는데 사용한다.
import MovieDetail from "../components/MovieDetail";
import {useEffect, useState} from "react";

function Detail() {
    const {id} = useParams();   // 동적 파라미터(URL) 값을 받아오기 movie/:id를 받아온다.
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState([]);
    
    const getDetail = async() => {  // await 는 async 함수 내부에 있지 않으면 사용할수 없으므로
        // getDetail 함수를 만들어 사용한다.
        // Movie detail json 코드 얻어오기
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        console.log(json);
        setMovieDetail(json.data.movie);
        setLoading(false);
        console.log("genres : ", json.data.movie.genres);
    }
    useEffect(() => {
        getDetail();
    },[]);

    // console.log()
 
    return (
        // call MovieDetail.js
       <div>
           {
            loading ?
            <h1>Loading...</h1> :
            <MovieDetail 
                title = {movieDetail.title}
                large_cover_image = {movieDetail.large_cover_image}
                background_image = {movieDetail.background_image}
                description_intro = {movieDetail.description_intro}
                description_full = {movieDetail.description_full}
                genres = {movieDetail.genres}
            />
            }
       </div>
    );
}

export default Detail;