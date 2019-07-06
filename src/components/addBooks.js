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

    const list = [
      {
        id: "a",
        bookTitle: "Learning React",
        author: "Alex Banks,Eve Porcello",
        href: "hh"
      }, {
        id: "b",
        bookTitle: "JavaScript",
        author: "Kate K",
        href: "hh"
      },
    ];


    const List = ({list}) => (<ul>
      {list.map(item => (<ListItem key={item.id} item={item}/>))}
    </ul>);

    const ListItem = ({item}) => (<div className="container booksMedia">
      <img alt="React1" src={reactbook} className="image"/>
      <i className="fa fa-times deleteBtn"></i>
      <div className="">
        <div className="text">
          <div className="book-name">{item.bookTitle}</div>
          <div className="author-desc">{item.author}</div>
          <a href={item.href} target="_blank">Info</a>
        </div>
      </div>
    </div>);





    return (<section id="bookcaseSection">
      <header className="major">
        <h2>Bookcase</h2>
      </header>

      <div id="bookImgMain" className="posts">

        <List list={list} />

      </div>

    </section>);
  }
}

export default AddBooks;
