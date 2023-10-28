import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:5000",
});

  export const GenresGet = async () =>
  await HTTP.get("/api/genres");

  export const GenreSingleGet = async (id) =>
  await HTTP.get(`/api/list/${id}`);

  /**********/

  export const Login = async (formData) =>
  await HTTP.post("/users/signin", formData);

  export const Signup = async (formData) =>
  await HTTP.post("/users/signup", formData);

  export const ProfileGet = async (email) =>
  await HTTP.get(`/users/profile/get/${email}`);

  export const ProfileUpdate = async (formData) =>
  await HTTP.post("/users/profile/update", formData);

  export const NotesList = async (email) =>
  await HTTP.get(`/notes/list/${email}`);

  export const NotesGet = async (id) =>
  await HTTP.get(`/notes/note/${id}`);

  export const NotesInsert = async (formData) =>
  await HTTP.post("/notes/insert", formData);

  export const NotesUpdate = async (formData) =>
  await HTTP.post("/notes/update", formData);

  export const NotesDelete = async (id) =>
  await HTTP.post("/notes/delete", {id});

  
  export const createMovie = async (formData) =>
  await HTTP.post("/movie", formData);
  
  export const getMovie = async () =>
  await HTTP.get("/movie");

  export const getMovies = async (id) =>  
  await  HTTP.get(`/movie/${id}`)

  export const deleteMovie = async (id) =>
  await HTTP.delete(`/movie/${id}`);

  export const updateMovie = async (id, updatedMovie) =>
  await HTTP.put(`/movie/${id}`, updatedMovie);

