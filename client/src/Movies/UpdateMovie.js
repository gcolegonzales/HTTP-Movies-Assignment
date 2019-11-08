import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovie = props => {
    const [movieToEdit, setMovieToEdit] = useState();

    useEffect(() => {
        setMovieToEdit(props.movie)
    }, [])

    const handleChange = e => {
        setMovieToEdit({
            ...movieToEdit,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e, movie) => {
        e.preventDefault();
        console.log(`Submitted!`)
        axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then((result) => {
                console.log(result)
                props.history.push('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
            <div>
                {movieToEdit && (
                <form onSubmit={(e) => handleSubmit(e, movieToEdit)}>
                    <input name='title' value={movieToEdit.title} placeholder='Title' onChange={handleChange} />
                    <input name='director' value={movieToEdit.director} placeholder='Director' onChange={handleChange} />
                    <input name='metascore' value={movieToEdit.metascore} placeholder='Title' onChange={handleChange} />
                    <button type='submit'>Submt</button>
                </form>
                )}
            </div>
    )
}

export default UpdateMovie;