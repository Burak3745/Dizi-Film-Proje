
  import * as api from '../axios'

  export const getMovieAction = () => async (dispatch) => {
    try {
      const { data } = await api.getMovie()
  
      dispatch({ type: "GET_MOVIE", payload: data })
    } catch (error) {
      console.log(error)
    }
  }
  
    export const createMovieAction = (movieData) => async (dispatch) => {
      try {
        const { data } = await api.createMovie(movieData)
    
        dispatch({ type: 'CREATE_MOVIE', payload: data })
      } catch (error) {
        console.log(error)
      }
    }

    export const updateMovieAction = (id, movieData) => async (dispatch) => {
        try {
          const { data } = await api.updateMovie(id, movieData)
      
          dispatch({ type: 'UPDATE_MOVIE', payload: data })
        } catch (error) {
          console.log(error)
        }
      }
  
    export const deleteMovieAction = (id) => async (dispatch) => {
      try {
        await api.deleteMovie(id)
    
        dispatch({ type: 'DELETE_MOVIE', payload: id })
      } catch (error) {
        console.log(error)
      }
    }
  
    



    /*
    export const fetchdoors = (id) => async (dispatch) => {
      try {
        const { data } = await api.fetchdoors(id)
    
        dispatch({ type: FETCH_ID, payload: data })
      } catch (error) {
        console.log(error)
      }
    }

    */