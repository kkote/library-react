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
      search: "JavaScript",
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

    const { search, data, dataResult } = this.state;

    return (
      <div className="App">
        <div id="wrapper">
          <div id="main">
            <div className="inner">
              <Header />

              <div>
              </div>

              <AddBooks />

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

                  <Searchbooks
                    lists={this.state.data}
                    clickedAButton={this.clickClick.bind(this)}
                  />

                {" "}
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
