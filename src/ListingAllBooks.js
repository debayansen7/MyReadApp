import React, {Component}  from 'react'
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class ListingAllBooks extends Component{

  state = {
    books: [],
    currentlyReadBooks: [],
    wantToReadBooks: [],
    readBooks: [],
    updatedList: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({books})
    })
  };

  updateShelf(book, shelf) {
    alert("Updated "+book.title+" to shelf: "+shelf);
    console.log(book);
    console.log(shelf);
    // BooksAPI.update(book, shelf).then((books) => {
    //   console.log(books);
    //   this.setState({ updatedList: books })
    //   // this.state.updatedList = books;
    //   console.log(this.state.updatedList);
    //
    // });
  };

  render(){
    const {books} = this.state;

    const currentlyReadBooks= books.filter((book) => book.shelf === 'currentlyReading');
    const wantToReadBooks= books.filter((book) => book.shelf === 'wantToRead' );
    const readBooks= books.filter((book) => book.shelf === 'read' );
    const noneBooks= books.filter((book) => book.shelf === 'none' );

  	return(
      <div className="list-books">
        <div className="list-books-title"><h1>MyReads</h1></div>
        <div className="list-books-content">
          <div>
            <ListBooks
              heading={"Currently Reading"}
              books={currentlyReadBooks}
              onUpdate={this.updateShelf} />

            <ListBooks
            heading={"Read"}
            books={readBooks}
            onUpdate={this.updateShelf} />

            <ListBooks
              heading={"Want To Read"}
              books={wantToReadBooks}
              onUpdate={this.updateShelf} />

            <ListBooks
              heading={"None"}
              books={noneBooks}
              onUpdate={this.updateShelf} />

          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a Book</Link>
        </div>
      </div>
    )
  }
};
export default ListingAllBooks;
