import React from 'react'
import {Link} from 'react-router-dom'
import ListBooks from './ListBooks'

const ListingAllBooks = (props) => {

  let currentlyReadingBooks = [];
  let wantToReadBooks = [];
  let readBooks = [];

  if(props.books.length !== 0){
    currentlyReadingBooks= props.books.filter((book) => book.shelf === 'currentlyReading');
    wantToReadBooks= props.books.filter((book) => book.shelf === 'wantToRead');
    readBooks= props.books.filter((book) => book.shelf === 'read');
  }

  return(
    <div className="list-books">
      <div className="list-books-title"><h1>MyReads</h1></div>
      <div className="list-books-content">
        <div>
          <ListBooks
            heading={"Currently Reading"}
            books={currentlyReadingBooks}
            onUpdate={props.onUpdate} />
          <ListBooks
            heading={"Read"}
            books={readBooks}
            onUpdate={props.onUpdate} />
          <ListBooks
            heading={"Want To Read"}
            books={wantToReadBooks}
            onUpdate={props.onUpdate} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a Book</Link>
      </div>
    </div>
  )
};

export default ListingAllBooks;
