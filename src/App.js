import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import ListingAllBooks from './ListingAllBooks'
import NoMatch from './NoMatch'

class BooksApp extends React.Component {
  constructor() {
    super();
    this.updateShelf = this.updateShelf.bind(this);
  };

  state = {
    books: [],
    updatedList: [],
    listUpdated: false
  };

  componentDidMount() { // trigger to get all data
    this.getAllBooks();
  };

  getAllBooks(){ // get all the books
    BooksAPI.getAll().then((books) => {
      // console.log(books);
      this.setState({books});
      // this.updatedList(this.state.books);
    })
  };

  getBookData(id){ //get particular book data from ID
    BooksAPI.get(id).then((book)=>{
      return book;
    });
  };

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(previousState => ({
        books: previousState.books.filter(b=> b.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    const {books} = this.state;
    return (
      <div className="app" >
        <Switch>
          <Route exact path="/" render={()=>
            <ListingAllBooks books={books} onUpdate={this.updateShelf} />
          } />
          <Route path="/search" render={()=>
            <SearchBook books={books} onUpdate={this.updateShelf} />
          } />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}
export default BooksApp
