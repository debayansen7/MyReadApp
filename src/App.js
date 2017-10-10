import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBook from './SearchBook'
import ListingAllBooks from './ListingAllBooks'


class BooksApp extends React.Component {
  render() {
    return (
      <div className="app" >
        <Route exact path="/" render={()=> <ListingAllBooks /> } />
        <Route path="/search" render={()=> <SearchBook /> } />
      </div>
    )
  }
}
export default BooksApp
