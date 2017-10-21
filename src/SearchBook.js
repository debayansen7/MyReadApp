import React, {Component}  from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'

class SearchBook extends Component{

  state = {
    setBooks: [],
    query: '',
    searchedBooks: [],
    showResults: false,
    errorMessage1: 'Sorry no books found with this query',
    errorMessage2: 'Sorry please provide a query'
  }

  updateResult = (books) => {
    if(books.error === "empty query"){
      // console.log("Error true");
      this.setState({
        searchedBooks: [],
        showResults: false
      });
    }else{
      // console.log("Error false");
      this.setState({
        searchedBooks: books,
        showResults: true
      });
    }
  }

  compare = (arr1, arr2) => {
  for(var i=0; i<arr1.length; i++){
    for(var j=0; j<arr2.length; j++){
      if(arr1[i].id === arr2[j].id){
        arr1[i].shelf = arr2[j].shelf;
      }
    }
  }
}

  onSearch = (query) => {
    // console.log("Component Level: ", query);
    this.setState({
      query,
      setBooks: this.props.books
    });

    if(query.length !== 0 || query === null ){
      // console.log("Query true");
      BooksAPI.search(query, 10).then((books)=>{
        this.compare(books, this.state.setBooks)
        this.updateResult(books);
      });
    }
    else{
      // console.log("Query false");
      this.setState({
        query: '',
        searchedBooks: [],
        showResults: false
      })
    }
  };

  render(){
    // console.log(this.state.setBooks);
    // console.log(this.props.books);
    const {query, searchedBooks, showResults, errorMessage1} = this.state;
    // const {query, searchedBooks, showResults, errorMessage1, errorMessage2} = this.state;
    const {onUpdate} = this.props;
  	return(
    	<div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.onSearch(event.target.value)}
            />
          </div>
        </div>

        {searchedBooks.length !== 0 ?
          <div className="search-books-results">
            {
              showResults ?
                <ListBooks
                  heading={"Searching Books"}
                  books={searchedBooks}
                  onUpdate={onUpdate} />
                :
                {errorMessage1}
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
// <div className="search-books-results">{errorMessage2}</div>
