import PropeTypes from 'prop-types';

// Img, title, summary, genres 총 4개의 props 받음
function Movie({coverImg, title, summary, genres}) {
    return (
    <div>
        <img src={coverImg} alt={title}/>
        <h2>{title}</h2>
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
    coverImg: PropeTypes.string.isRequired,
    title: PropeTypes.string.isRequired,
    summary: PropeTypes.string.isRequired,
    genres: PropeTypes.arrayOf(PropeTypes.string).isRequired,
};

export default Movie;