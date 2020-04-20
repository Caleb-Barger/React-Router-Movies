import React, { useState } from 'react'
import {Switch, Route } from 'react-router-dom'

import SavedList from './Movies/SavedList'
import MovieList from './Movies/MovieList'

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie])
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route>

      </Route>
    </div>
  );
};

export default App;
