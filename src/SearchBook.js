import React, {Component}  from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
// import escapeRegExp from 'escape-string-regexp'

class SearchBook extends Component{

  state = {
    query: '',
    showResults: false,
    searchedBooks: []
  }

  onSearch = (query) => {
    // console.log("Component Level: ", query);
    this.setState({query: query.trim()})
    if(query !== null && query.length >= 3){
      // const match = new RegExp(escapeRegExp(query), 'i')
      // console.log("Query: ", query);
      BooksAPI.search(this.state.query, 10).then((books)=>{
        console.log(books);
        this.setState({
          searchedBooks: books,
          showResults:true
        });
      });
    }
  };

  render(){
    const {query, searchedBooks, showResults} = this.state;
    const {onUpdate} = this.props;

  	return(
    	<div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.onSearch(event.target.value)}
            />

          </div>
        </div>
        {
          searchedBooks.length !== 0 ?
          <div className="search-books-results">
            {
              showResults ?
                <ListBooks
                  heading={"Searching Books"}
                  books={searchedBooks}
                  onUpdate={onUpdate} />
                :
                "Sorry No Result Found"
            }

          </div>
          :
          ""
        }

      </div>
    )
  }

};
export default SearchBook;
