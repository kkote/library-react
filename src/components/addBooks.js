import React from "react";
import "../App.css";
import {FaTimes} from 'react-icons/fa';

class AddBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookTitle: "",
      list: this.props.list
    };
  };

  clickToRemove(item, e) {
    console.log("clicked an item to remove");
    this.props.removeItem(item.id);
  }

  render() {

    const List = ({list}) => ((this.props.bookcaseBooks).map(item => (<ListItem key={item.id} item={item}/>)));

    const ListItem = ({item, index}) => (<div className="container booksMedia">
      <img alt="React1" src={item.volumeInfo.imageLinks.thumbnail} className="image"/>

      <i className="fa fa-times deleteBtn" type="button" onClick={() => this.clickToRemove(item)}>
        <FaTimes/>
      </i>

      <div className="overlay">
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

        <List list={this.props.bookcaseBooks}/>

      </div>
    </section>);
  }
}

export default AddBooks;
