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
      dataResult:"",
      data: "",
      books: "",
      title: "",
      search: "JavaScript",
      bookTitle: "",
      author: "",
      img: "",
      href: "",
      selectedBook: "",
      isLoaded: false,
      error: ""
    };
    this.onBookInput = this.onBookInput.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
  }

  clickClick(value) {
    console.log("You just clicked up the state.");
    console.log(value);
  }

  handleExampleData() {
    console.log("Example Data");
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
      `https://www.googleapis.com/books/v1/volumes?q=${
        this.state.search
      }+&maxResults=3`
    )
      .then(handleErrors)
      .then(res => res.json())
      .then(
        result => {
          var resulttext = result.items;
          console.log(result);
          console.log(resulttext);

          this.setState({
            data: resulttext,
            dataResult: result,
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
    this.setState({ search: e.target.search.value });
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
    const { search, bookTitle, author, href, title, data, dataResult } = this.state;

    const posts = Object.keys(this.state.data).map(key => (
        {key}

    ))
    return (
      <div className="App">
        <div id="wrapper">
          <div id="main">
            <div className="inner">
              <Header />

              <div>
                


              </div>

              <AddBooks
                search={search}
                bookTitle={bookTitle}
                author={author}
                href={href}
              />
            </div>
          </div>
          <div id="sidebar" className="active">
            <div className="inner">
              <div id="searchbar" className="">
                <Sidebar xs={4} sm={4} md={4} lg={4}
                  handleSubmit={this.onBookInput}
                  data={this.state.data}
                />
              </div>
              <header className="major">
                <h2>Results</h2>
              </header>
              <div id="list" className="">
                <div>
                  {Object.keys(this.state.data).map(key => (
                    <Searchbooks
                      key={key}
                      details={this.state.data[key]}
                      clickedAButton={this.clickClick}
                    />
                  ))}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
