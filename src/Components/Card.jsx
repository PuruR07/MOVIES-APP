import React from 'react'

const Card = ({ movie: { title, vote_average, poster_path, release_date, original_language } }) => {
    return (
        // <div className='text-white border border-white rounded-lg p-5 flex flex-col gap-3'>
        <div className='movie-card'>
            {/* <img src="No-Poster-Landscape.png" alt="" className='w-70'/> */}
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "/no-movie.png"} alt={title} />
            <div className="mt-4">
                <h3>{title}</h3>
                <div className="content">
                    <div className="rating">
                        <img src="Rating_icon.svg" alt="Star Icon" />
                        <p>{vote_average ? vote_average.toFixed(2) : 'N/A'}</p>
                    </div>
                    <span>•</span>
                    <p className='lang'>{original_language}</p>
                    <span>•</span>
                    <p className="year">{release_date? release_date.split('-')[0]: "N/A"}</p>
                </div>
            </div>
        </div>
    )
}

export default Card