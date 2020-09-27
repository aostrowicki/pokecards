import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchData } from '../actions/dataActions'
import { fetchTypes } from '../actions/typesActions'
import Navbar from './Navbar'
import Landing from './views/landing'
import Pokemons from './views/pokemons'
import Pokemon from './views/pokemon'


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchTypes());
  }, [])

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/pokemon' component={Pokemons} />
        <Route exact path='/pokemon/:pokemon' component={Pokemon} />
        <Route exact path='/type/:type' component={Pokemons} />
      </Switch>
    </>
  );
}

export default App;
