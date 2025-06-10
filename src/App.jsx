import React from 'react'
import './App.css'
import Header from './Header.jsx'
import MovieList from './MovieList.jsx'
import LoadMore from './LoadMore.jsx'

const App = () => {
  return (
    <>
      <Header />
      <MovieList />
      <LoadMore />
    </>
  )
}

export default App
