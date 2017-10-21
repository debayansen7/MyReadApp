import React from 'react'
import Book from './Book'

const ListBooks = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.heading}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (
            <li key={book.id}>
              <Book book={book} onUpdate={props.onUpdate}/>
            </li>))}
        </ol>
      </div>
    </div>
  )
};

export default ListBooks
