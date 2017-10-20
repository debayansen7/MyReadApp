import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import ListingAllBooks from './ListingAllBooks'

class BooksApp extends React.Component {
  constructor() {
    super();
    this.updateShelf = this.updateShelf.bind(this);
    this.updatedList = this.updatedList.bind(this);
    // this.searchQuery = this.searchQuery.bind(this);
  };

  state = {
    books: [],
    currentlyReading: [],
    wantToReadBooks: [],
    readBooks: [],
    updatedList: [],
    listUpdated: false

    // query: '',
    // searchedBooks: []
  };

  componentDidMount() { // trigger to get all data
    this.getAllBooks();
  };

  getAllBooks(){ // get all the books
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({books});
      this.updatedList(this.state.books);
    })
  };

  getBookData(id){ //get particular book data from ID
    BooksAPI.get(id).then((book)=>{
      return book;
    });
  };

  updatedList(list){
    this.setState(()=>({
      currentlyReading: list.filter((book) => book.shelf === 'currentlyReading'),
      wantToReadBooks: list.filter((book) => book.shelf === 'wantToRead' ),
      readBooks: list.filter((book) => book.shelf === 'read' )
    }));
  };

  updateShelf(book, shelf) {
    // alert("Updated "+book.title+" to shelf: "+shelf);
    BooksAPI.update(book, shelf).then((books) => {
      // console.log(books);
      this.setState({
        updatedList: books,
        listUpdated: true
      });
      this.getAllBooks();
      // console.log(this.state.updatedList);
      // console.log(this.state.updatedList.currentlyReading);
      // this.updatedList(this.state.books);
    });
  };

  // searchQuery = (query) => {
  //   console.log("Applevel:  ",query);
  //   BooksAPI.search(query, 10).then((books)=>{
  //     console.log(books);
  //     this.setState({
  //       searchedBooks: books
  //     });
  //   });
  //   // return this.searchedBooks;
  // };

  render() {
    const { currentlyReading, wantToReadBooks, readBooks} = this.state;
    return (
      <div className="app" >
        <Route exact path="/" render={()=>
          <ListingAllBooks
            currentlyReading={currentlyReading}
            wantToReadBooks={wantToReadBooks}
            readBooks={readBooks}
            onUpdate={this.updateShelf}
          />
        } />
        <Route path="/search" render={()=>
          <SearchBook
            // searchedBooks={searchedBooks}
            onUpdate={this.updateShelf}
            // toSearchQuery={this.searchQuery}
          />
        } />
      </div>
    )
  }
}
export default BooksApp
