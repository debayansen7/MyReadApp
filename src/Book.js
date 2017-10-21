import React, {Component}  from 'react'

class Book extends Component {
	constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }

	state={
		noCover: "http://via.placeholder.com/128x193?text=No%20Cover"
	}

	handleEvent(event) {
		const shelf = event.target.value;
		this.props.onUpdate(this.props.book, shelf);
	};

	render(){
		const {authors, title, shelf, ratings, imageLinks} = this.props.book;
		return(
			<div className="book">
				<div className="book-top">
					{ imageLinks !== undefined ?
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
						:
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.state.noCover})` }}></div>
					}

					<div className="book-shelf-changer">
		        <select className="select" value={shelf || "none"} onChange={this.handleEvent}>
		          <option value="disabled" disabled>Move to...</option>
		          <option value="currentlyReading">Currently Reading</option>
		          <option value="wantToRead">Want to Read</option>
		          <option value="read">Read</option>
		          <option value="none">None</option>
		        </select>
		    	</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{authors ? authors.join(', ') : ''}</div>
				<div className="book-authors">{ratings}</div>
			</div>
      )
    }
};
export default Book
