import { useState, useEffect } from 'react';
import MovieCard from './MovieCard'
import InfinityScroll from './InfinityScroll';
import { GenreSingleGet } from "../axios/index.js";

export default function GenreCollection({ genre }) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        GenreSingleGet(genre.id)
            .then(res => setContent(res.data));
    }, [genre.id])

    return (
            <div className="movie-row">
                <div className="movie-category-label">{genre.name}</div>
                <InfinityScroll>
                    {content.map((item) => (
                        <MovieCard key={item.id} {...item} />
                    ))}
                </InfinityScroll>
            </div>
    );
}