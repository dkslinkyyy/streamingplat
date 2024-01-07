const MovieCard = ({ movie }) => {
    return (
        <div className="flex flex-wrap">
            <img src={movie.thumbnail} alt={movie.title} />
        </div>
    );
}

export default MovieCard;
