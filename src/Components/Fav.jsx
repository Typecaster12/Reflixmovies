
const Fav = ({ favList }) => {
    return (
        <div className="favList-container">
            <h2 className="fav-heading">Favorite Movies</h2>
            {favList.length === 0 ? (
                <p>No favorite movies yet.</p>
            ) : (
                <ul className="movies-list">
                    {favList.map((movie, index) => (
                        <li className="movie-card" key={index}>
                            <img src={movie.Poster} alt="movie-poster" className="movie-poster" />
                            <h3 className="movie-title">Title: {movie.Title}</h3>
                            <p className="movie-year">Year: {movie.Year}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Fav;