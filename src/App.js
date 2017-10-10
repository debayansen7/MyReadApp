import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import ListingAllBooks from './ListingAllBooks'


class BooksApp extends React.Component {
  // state = {
  //   screens: 'search',
  //   books: [],
  //   showSearchPage: false
  // }

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
