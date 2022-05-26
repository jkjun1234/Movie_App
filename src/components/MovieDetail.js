// Movie Detail 컴포넌트 
// 영화의 줄거리와 장르 출연진을 확인 할 수 있는 페이지

function MovieDetail({id, title, large_cover_image, background_image, description_intro, description_full,  genres }) {
     
    return (
        <div>
            <img src={large_cover_image} alt={title}/>
            <img src={background_image} alt={title}/>
            <div><p>Intro:</p> {description_intro}</div>
            <div><p>Full Intro:</p> {description_full}</div>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

export default MovieDetail;