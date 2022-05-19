import PropeTypes from 'prop-types';
import {Link} from "react-router-dom";
//Link 는 a href ="/" 의 링크 태그와 다르게 웹페이지가 빠르게 반응
// 웹페이지전체가 새로고침 되지않음

// id, Img, title, summary, genres 총 4개의 props 받음 
function Movie({id, coverImg, title, summary, genres}) {
    return (
    <div>
        <img src={coverImg} alt={title}/>
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
        </ul>
    </div>
    );
}
//props 타입 지정 isRequired는 prop가 제공 되지 않았을때 경고가 보이도록 한다.
Movie.PropeTypes = {
    id: PropeTypes.number.isRequired,
    coverImg: PropeTypes.string.isRequired,
    title: PropeTypes.string.isRequired,
    summary: PropeTypes.string.isRequired,
    genres: PropeTypes.arrayOf(PropeTypes.string).isRequired,
};

export default Movie;