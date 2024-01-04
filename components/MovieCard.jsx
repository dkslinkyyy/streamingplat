const MovieCard = (movie) => {
    return (
        <div className="flex flex-wrap w-full">
              <img src={movie.image} alt={movie.title} />
        </div>
    );
}

export default MovieCard;