import React, {Component}  from 'react'
// import PropTypes from 'prop-types'
//import * as BooksAPI from './BooksAPI'

class Book extends Component {
	constructor(props) {
    super(props);
    this.state = {
			title: props.book.title,
			authors: props.book.authors,
			shelf: props.book.shelf,
			thumbnail: props.book.imageLinks.thumbnail,
			ratings: props.book.ratings
		};
    this.handleEvent = this.handleEvent.bind(this);
  }

	handleEvent(event) {
		const shelf = event.target.value;
		this.props.onUpdate(this.props.book, shelf);
	};

	render(){
		const {authors, title, shelf, thumbnail, ratings} = this.state;
		return(
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
						<div className="book-shelf-changer">
			        <select className="select" value={shelf} onChange={this.handleEvent}>
			          <option value="none" disabled>Move to...</option>
			          <option value="currentlyReading">Currently Reading</option>
			          <option value="wantToRead">Want to Read</option>
			          <option value="read">Read</option>
			          <option value="none">None</option>
			        </select>
			    	</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{authors}</div>
				<div className="book-authors">{ratings}</div>
			</div>
      )
    }
};
export default Book
