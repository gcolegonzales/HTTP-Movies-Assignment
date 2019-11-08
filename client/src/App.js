import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import UpdateMovie from './Movies/UpdateMovie';
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [editingMovie, setEditingMovie] = useState();

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const editMovieButton = movie => {
    setEditingMovie(movie);
  }

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} editMovieButton={editMovieButton} addToSavedList={addToSavedList} />;
        }}
      />
      <Route exact path='/update-movie/:id' render={props => {
          return <UpdateMovie {...props} movie={editingMovie} />
      }} />
    </>
  );
};

export default App;
