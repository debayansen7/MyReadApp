import React, {Component}  from 'react'
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types'
// import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'

class ListingAllBooks extends Component{

  // constructor(props) {
  //   super(props);
  //   // this.props.updateShelf = this.props.updateShelf.bind(this);
  //   // this.props.updatedList = this.props.updatedList.bind(this);
  // }

  state = {
    currentlyReading: this.props.currentlyReading,
    wantToReadBooks: this.props.wantToReadBooks,
    readBooks: this.props.readBooks,
    updatedList: [],
    listUpdated: false
  }

  // componentDidMount() { // trigger to get all data
  //   this.getAllBooks();
  // };
  //
  // getAllBooks(){ // get all the books
  //   BooksAPI.getAll().then((books) => {
  //     console.log(books);
  //     this.setState({books});
  //     this.updatedList(this.state.books);
  //   })
  // };
  //
  // getBookData(id){ //get particular book data from ID
  //   BooksAPI.get(id).then((book)=>{
  //     return book;
  //   });
  // };
  //
  // updatedList(list){
  //   this.setState(()=>({
  //     currentlyReading: list.filter((book) => book.shelf === 'currentlyReading'),
  //     wantToReadBooks: list.filter((book) => book.shelf === 'wantToRead' ),
  //     readBooks: list.filter((book) => book.shelf === 'read' )
  //   }));
  // };

  checkList(){
  };

  // updateShelf(book, shelf) {
  //   // alert("Updated "+book.title+" to shelf: "+shelf);
  //   BooksAPI.update(book, shelf).then((books) => {
  //     // console.log(books);
  //     this.setState({
  //       updatedList: books,
  //       listUpdated: true
  //     });
  //     this.getAllBooks();
  //     // console.log(this.state.updatedList);
  //     // console.log(this.state.updatedList.currentlyReading);
  //     // this.updatedList(this.state.books);
  //   });
  // };

  functionCall(){
    // if(this.state.listUpdated){
      // console.log("List updated");
      //
      // let books = this.state.updatedList.currentlyReading.map(this.getBookData);
      // console.log(books);
      // this.setState(()=>({
      //   currentlyReading:


        // list.filter((book) => {
        //   return book.filter((id, index) => {
        //     id === this.state.updatedList.currentlyReading[index].id
        //   })
        // })
        // this.updatedList.currentlyReading.filter((book)=>{book === list.book.id })
        //  list.filter((book)=>{
        //   console.log(book);
        //   return book.id === this.updatedList.currentlyReading[0] || book.id === this.updatedList.currentlyReading[1]
        //   }
        // ),
        // wantToReadBooks: this.updatedList.wantToRead,
        // readBooks: this.updatedList.read
      // }));
      // console.log(this.state.currentlyReading);
      // console.log(this.state.wantToReadBooks);
      // console.log(this.state.readBooks);
    // }
    // else{
      // console.log(books);
      // this.setState(()=>({
      //   currentlyReading: list.filter((book) => book.shelf === 'currentlyReading'),
      //   wantToReadBooks: list.filter((book) => book.shelf === 'wantToRead' ),
      //   readBooks: list.filter((book) => book.shelf === 'read' )
      // }));
    // }
  }

  render(){
    const {currentlyReading, wantToReadBooks, readBooks} = this.props;
  	return(
      <div className="list-books">
        <div className="list-books-title"><h1>MyReads</h1></div>
        <div className="list-books-content">
          <div>
            <ListBooks
            heading={"Currently Reading"}
            books={currentlyReading}
            onUpdate={this.props.onUpdate} />

            <ListBooks
            heading={"Read"}
            books={readBooks}
            onUpdate={this.props.onUpdate} />

            <ListBooks
            heading={"Want To Read"}
            books={wantToReadBooks}
            onUpdate={this.props.onUpdate} />

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
