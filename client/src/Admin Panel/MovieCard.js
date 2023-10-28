import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <article class="card my-2">
  <img
    class="card__background"
    src={movie.image}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="100%"
    height="100%"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">{movie.name}</h2>
      <p class="card__description">
        {movie.description}
      </p>
    </div>
    <button class="card__button">Play</button>
  </div>
</article>
  )
}

export default MovieCard