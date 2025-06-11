//App.jsx
import React from 'react'
import './App.css'
import Header from './Header.jsx'
import MovieList from './MovieList.jsx'
import LoadMoreButton from './LoadMoreButton.jsx'

const App = () => {
  return (
    <>
      <Header />
      <MovieList />
      <LoadMoreButton />
    </>
  )
}

export default App
