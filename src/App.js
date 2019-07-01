import React from 'react';
import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import AddBooks from "./components/addBooks";
import Sidebar from "./components/sidebar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: "",
      search: "",
      bookTitle: "",
      author: "",
      img:"",
      href:""
    };
  }

  handleDataChange() {

      this.setState({
        img: "images/books/react1.jpeg",
        bookTitle: "Learning React",
        author: "Alex Banks,Eve Porcello",
        href: "hh"
      });


  }

  componentDidMount() {
    this.handleDataChange();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.city !== prevState.city) {
      this.handleDataChange();
    }
  }

  render() {
    const {city, search, bookTitle, author, href} = this.state;

    return (<div className="App">
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <Header/>
            <AddBooks
              search={search}
              bookTitle={bookTitle}
              author={author}
              href={href}
              />
          </div>
        </div>
        <Sidebar/>
      </div>
      <Footer/>
    </div>);
  }
}

export default App;
