import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import AddBooks from "./components/addBooks";
import Sidebar from "./components/sidebar";
import Searchbooks from "./components/searchBooks";
import LoginForm from "./components/login";

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
      allUsers: "",
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

  addSelectedBook(value) {
    this.setState(state => ({bookcaseBooks: state.bookcaseBooks.concat(value)}))
  }

  signIn(username, password) {
    console.log("this is signIn, for api")
    // where call API,
    // calling setState will re-render the entire app (efficiently!)
    this.setState({
      user: {
        username,
        password
      }
    })
    console.log(this.state.user);
  }




  signOut() {
    // clear out user from state
    this.setState({user: null})
  }

  render() {
    const Welcome = ({user, onSignOut}) => {
      // This is a dumb "stateless" component
      return (<div>
        Welcome
        <strong> {user.username}</strong>!
        <a href="javascript:;" onClick={onSignOut}>Sign out</a>
      </div>)
    }

    return (<div className="App">
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <header id="header">
              
              <div className="icons">
                <div>
                  {
                    (this.state.user)
                      ? <Welcome user={this.state.user} onSignOut={this.signOut.bind(this)}/>
                      : <LoginForm onSignIn={this.signIn.bind(this)}/>
                  }
                </div>

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
