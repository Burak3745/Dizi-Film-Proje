
const movieReducer = (movie = [], action) => {
  switch (action.type) {

    case "GET_MOVIE":
      return action.payload

    case "CREATE_MOVIE":
      return [...movie, action.payload]

    case "UPDATE_MOVIE":
      return movie.map((movie) =>
      movie._id === action.payload._id ? action.payload : movie
        )

    case "DELETE_MOVIE":
      return movie.filter((movie) => movie._id !== action.payload)

    default:
      return movie
  }
}

export default movieReducer;