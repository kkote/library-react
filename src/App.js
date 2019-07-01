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
      img: "",
      href: ""
    };
    this.onBookInput = this.onBookInput.bind(this);
  }

  handleDataChange() {
    this.setState({img: "images/books/react1.jpeg", bookTitle: "Learning React", author: "Alex Banks,Eve Porcello", href: "hh"});
  }


  onBookInput(e) {
    e.preventDefault();
    this.setState({search: e.target.search.value});
  }


  componentDidMount() {
    this.handleDataChange();
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      this.handleDataChange();
    }
  }

  render() {
    const {city, search, bookTitle, author, href} = this.state;

    return (<div className="App">
      <div id="wrapper">
        <div xs={8} sm={8} md={8} lg={8}>
          <div className="inner">
            <Header/>
            <div>{search}</div>
            <AddBooks search={search} bookTitle={bookTitle} author={author} href={href}/>
          </div>
        </div>
        <Sidebar xs={4} sm={4} md={4} lg={4} handleSubmit={this.onBookInput}/>
      </div>
      <Footer/>
    </div>);
  }
}

export default App;
