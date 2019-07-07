import React from "react";
import "../App.css";
import reactbook from "../Images/books/react1.jpeg";

class AddBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookTitle: "",
      list: this.props.list
    };
  };


  render() {

    

    const List = ({list}) => (
      (this.props.bookcaseBooks).map(item => (<ListItem key={item.id} item={item}/>))
    );

    const ListItem = ({item}) => (<div className="container booksMedia">
      <img alt="React1" src={reactbook} className="image"/>
      <i className="fa fa-times deleteBtn"></i>
      <div className="">
        <div className="text">
          <div className="book-name">{item.volumeInfo.title}</div>
          <div className="author-desc">{item.volumeInfo.authors}</div>
          <a href={item.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">Info</a>
        </div>
      </div>
    </div>);


    return (<section id="bookcaseSection">
      <header className="major">
        <h2>Bookcase</h2>
      </header>
      <div id="bookImgMain" className="posts">

        <List list={this.props.bookcaseBooks} />

      </div>
    </section>);
  }
}

export default AddBooks;
