
import React from "react";
import reactbook from "../Images/books/react1.jpeg";

class AddBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookTitle: "",
      author: "",
      img:"",
      href:"",
      city: this.props.city,
      error: "error"
    };


  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentTemp !== prevProps.currentTemp) {
      this.addABook();
    }
  }

  addABook() {


    const clothesForWeather = [
    {img: "images/books/react1.jpeg", bookTitle: "Learning React", author: "Alex Banks,Eve Porcello", href: "hh"}
    ];

    this.setState({
      img: "images/books/react1.jpeg",
      bookTitle: "Learning React",
      author: "Alex Banks,Eve Porcello",
      href: "hh"
    });

  }


  render() {

    const {img, bookTitle, author, href} = this.props;

    return (<section id="bookcaseSection">
      <header className="major">
      <h2>Bookcase
      </h2>
      </header>

      <div id="bookImgMain" className="posts">
        <div className="container booksMedia">

            <img src={reactbook}alt="React1" className="image" />
            <i className="fa fa-times deleteBtn"></i>
            <div className="">
              <div className="text">
                <div className="book-name">{bookTitle}</div>
                <div className="author-desc">{author}</div>
                <a href={href} target="_blank">Info</a>
              </div>
            </div>
          </div>
      </div>
    </section>);
  }
}

export default AddBooks;
