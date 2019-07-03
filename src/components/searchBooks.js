import React from "react";
import "../App.css";
import reactbook from "../Images/books/react1.jpeg";

class Searchbooks extends React.Component {
  render() {
    // details is all the githubdata coming from the details prop above
    const { details, reactbook } = this.props;

    return (
      <div className="infowrapper">
        <div className="img-div">
          <img src={details.volumeInfo.imageLinks.thumbnail} alt="React1" />
        </div>
        <div className="infogroup">
          <div className="book-name">{details.volumeInfo.title}</div>
          <div className="author-desc">{details.volumeInfo.authors}</div>
          <a href="" target="_blank">
            Info
          </a>
          <button className="button small">Select</button>
        </div>
      </div>
    );
  }
}

export default Searchbooks;
