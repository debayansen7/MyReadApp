import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func
  }
  render(){
    const {books, onUpdate} = this.props;
  	return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.heading}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} onUpdate={onUpdate}/>
            </li>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}
export default ListBooks
