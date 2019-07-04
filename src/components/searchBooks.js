import React from "react";
import "../App.css";

class Searchbooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      value: "Python",
      selectedProduct: {},
      isAdded: false,
      error: "error"
    };

    }



    clickForAdd(){
      this.setState(
      {
        isAdded: true
      })
    }

    addToCart(image, title, author, info) {
      this.setState(
        {
          selectedProduct: {
            image: image,
            title: title,
            author: author,
            info: info
          }
        },

        function() {
          this.props.addToCart(this.state.selectedProduct);
        }
      );
      this.setState(
        {
          isAdded: true
        },

      {/*  function() {
          setTimeout(() => {
            this.setState({
              isAdded: false,
              selectedProduct: {}
            });
          }, 3500);
        } */}

      );
    }



  render() {
    // details is all the githubdata coming from the details prop above
    const { details, key} = this.props;
    let image = details.volumeInfo.imageLinks.thumbnail;
    let title = details.volumeInfo.title;
    let author = details.volumeInfo.authors;
    let info = details.volumeInfo.infoLink;
    let id = key;
    return (
      <div className="infowrapper">
        <div className="img-div">
          <img src={image} alt="React1" />
        </div>
        <div className="infogroup">
          <div className="book-name">{details.volumeInfo.title}</div>
          <div className="author-desc">{details.volumeInfo.authors}</div>
          <a href={details.volumeInfo.infoLink} target="_blank">
            Info
          </a>



          <button className="button small"
            className={!this.state.isAdded ? "" : "added"}
            type="button"
            onClick={this.clickForAdd.bind(
              this

            )}
          >
            {!this.state.isAdded ? "Select" : "ADDED"}
          </button>



        </div>
      </div>
    );
  }
}

export default Searchbooks;
