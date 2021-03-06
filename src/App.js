import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import AddBooks from "./components/addBooks";
import Sidebar from "./components/sidebar";
import Searchbooks from "./components/searchBooks";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      bookcaseBooks: [
        {
          id: "LpctBAAAQBAJ",
          volumeInfo: {
            authors: ["Jon Duckett, Example"],
            title: "JavaScript and JQuery - Example",
            infoLink: "http://books.google.com/books?id=LpctBAAAQBAJ&dq=JavaScript&hl=&source=gbs_api",
            imageLinks: {
              thumbnail: "http://books.google.com/books/content?id=LpctBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
          }
        }
      ],
      search: "Python",
      isLoaded: false,
      user: null,
      error: ""
    };
    this.onBookInput = this.onBookInput.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);

  }

  addSelectedBook(value) {
    this.setState(state => ({bookcaseBooks: state.bookcaseBooks.concat(value)}))
  }

  onRemoveItem = id => {
    const {bookcaseBooks} = this.state;
    const list = (this.state.bookcaseBooks).filter(item => item.id !== id);

    this.setState({bookcaseBooks: list});
  };

  handleDataChange() {
    function handleErrors(response) {
      if (!response.ok) {
        console.log("Error!!!!");
        throw Error(response.statusText);
      }
      console.log("okay");
      return response;
    }

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}+&maxResults=4`).then(handleErrors).then(res => res.json()).then(result => {
      var resulttext = result.items;
      this.setState({data: resulttext, isLoaded: true, error: ""});
    }, error => {
      this.setState({error: "Please input valid search..."});
    });
  }

  onBookInput(e) {
    e.preventDefault();
    this.setState({search: e.target.search.value});
  }

  componentDidMount() {
    console.log("Did Mount");
    this.handleDataChange();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      this.handleDataChange();
    }
  }




  render() {
  

    return (<div className="App">
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <header id="header">
              <div className="icons">
              </div>
            </header>
            <Header/>

            <AddBooks bookcaseBooks={this.state.bookcaseBooks} removeItem={this.onRemoveItem.bind(this)}/>

          </div>
        </div>
        <div id="sidebar" className="active">
          <div className="inner">
            <div id="searchbar" className="">
              <Sidebar xs={4} sm={4} md={4} lg={4} handleSubmit={this.onBookInput} data={this.state.data}/>
            </div>
            <header className="major">
              <h2>Results</h2>
            </header>
            <div id="list" className="">
              <div>

                <Searchbooks lists={this.state.data} bookcaseBooks={this.state.bookcaseBooks} clickedAButton={this.addSelectedBook.bind(this)}/> {" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>);
  }
}

export default App;
