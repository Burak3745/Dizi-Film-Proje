
import SideBar from './SideBar'
import '../css/AddMovie.css'
import { Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardImg, Col, Row, Table } from 'react-bootstrap';
import MovieCard from './MovieCard';
import { useEffect } from 'react';
import { getMovieAction } from '../action/movieAction';
import {GrUpdate} from 'react-icons/gr'
import { motion } from "framer-motion"
const MovieList = () => {
    const imageanimations = {
        hidden: {
          opacity: 0,
          width: '80px'
        },
        show: {
          opacity: 1,
          width: '70px',
          transition: {
            ease: 'easeInOut',
            duration: 0.8
          }
        }
      }
    const movie = useSelector(state => state.movie)
    const dispatch = useDispatch();
    useEffect(() => {
        if (!movie[0]) {
            dispatch(getMovieAction());
        }
    }, [dispatch]);



    if (!localStorage.getItem("user")) {
        return <Navigate to="/login" />;
    } else {

        return (

            <div><div class="float-child">
                <div class="green"><SideBar /></div>
            </div>

                <div class="float-child">
                    <div class="blue">
                        <Table >
                            <thead className='text-light'>
                                <th>IMAGE</th>
                                <th>NAME</th>
                                <th>CATAGORY</th>
                                <th>COUNTRY</th>
                                <th>YEAR</th>
                                <th>TIME</th>
                                <th>ACTIONS</th>
                            </thead>
                            <tbody className='text-muted'>
                                {movie.slice(0,10).map((d, i) => (
                                    <tr key={i}>
                                        <motion.div variants={imageanimations} initial="hidden" animate="show">
                                            <div className='bg-image hover-zoom'>
                                                <Card.Img variant="top" src={d.image} />
                                            </div>
                                        </motion.div>
                                        <td>{d.name}</td>
                                        <td>{d.catagory}</td>
                                        <td>{d.country}</td>
                                        <td>{d.year}</td>
                                        <td>{d.time}</td>
                                        <div>
                                        <GrUpdate color='red'/>
                                        </div>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
};

export default MovieList

/*<div class="AddMovie">

                <div class="float-child">
                    <div class="green"><SideBar /></div>
                </div>

                <div class="float-child">
                    <div class="blue ">
                        {
                            movie.slice(0,6).
                            map((movie) => (


                                <div id="container">

                                    <div class="product-details">

                                        <h1>{movie.name}</h1>


                                        <p class="information">" Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.</p>



                                        <div class="control">

                                        

                                        </div>

                                    </div>
                                    <button class="button-64 my-1" role="button"><span class="text">Button 64</span></button>

                                    <div class="product-image">

                                        <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />


                                        
                                    </div>

                                </div>


                            ))
                        }
                    </div>
                </div>

            </div>
            */