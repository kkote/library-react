
import React from "react";
import bookimage from "../Images/books/bannerbook1.jpg";

const Header = props => {
  return (

    <section id="banner">
      <div className="content">
        <header>
          <h1>Digital Library</h1>
          <p>Your Personal Collection</p>
        </header>
        <p>Search, organize, and display your collection of books.
        </p>
        <ul className="actions">
          <li>
            <a href="#bookcaseSection" className="button big">View Books</a>
          </li>
        </ul>
      </div>
      <span className="image object">
        <img alt="bannerbook" src={bookimage} />
        </span>
      </section>);
}

export default Header;
