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
      title:"",
      search: "JavaScript",
      bookTitle: "",
      author: "",
      img: "",
      href: "",
      isLoaded: false,
      error:""
    };
    this.onBookInput = this.onBookInput.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);

  }



  handleDataChange() {
  function handleErrors(response) {
    if (!response.ok) {
      console.log("Error!!!!");
      throw Error(response.statusText);
    }
    console.log("okay");
    return response;
  }

  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}+&maxResults=3`)
    .then(handleErrors)
    .then(res => res.json())
    .then(
      result => {
        this.setState({
          title: result.items[1].volumeInfo.title,
          img: "images/books/react1.jpeg",
          bookTitle: "Learning React",
          author: "Alex Banks,Eve Porcello",
          href: "hh",
          isLoaded: true,
          error: ""
        });
      },
      error => {
        this.setState({ error: "Please input valid city..." });
      }
    );
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
    const {city, search, bookTitle, author, href, title} = this.state;

    return (<div className="App">
      <div id="wrapper">
        <div xs={8} sm={8} md={8} lg={8}>
          <div className="inner">
            <Header/>
            <div>
              <div>{search}</div>
              <div>{this.state.title}</div>
              <div>{this.state.error}</div>
            </div>

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
