import React from "react";
import "../App.css";

class Searchbooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      isAdded: false,
      list: this.props.list,
      error: "error"
    };

    }

    clickedButton(item, e){
      console.log(item);
      this.props.clickedAButton(item);
      this.setState(
      {
        isAdded: true
      })
    }


  render() {

    const { lists }  = this.state;

    const List = ({ lists }) => (

    Object.keys(this.props.lists).map(key => (
      <ListItem
      key={key}
      item={this.props.lists[key]}
      />
    ))
    );


  const ListItem = ({ key, item}) => (
    <div className="infowrapper">
    <div className="img-div">
      <img src={item.volumeInfo.imageLinks.thumbnail} alt="React1" />
    </div>
    <div className="infogroup">
      <div className="book-name">{item.volumeInfo.title}</div>
      <div className="author-desc">{item.volumeInfo.authors}</div>
      <a href={item.volumeInfo.infoLink} target="_blank">
        Info
      </a>
      <div className="book-id">{item.id}</div>

      <button className="button small"
        className={!this.state.isAdded ? "" : "added"}
        type="button"

        onClick={this.clickedButton.bind(this, item)}

      >
        {!this.state.isAdded ? "Select" : "ADDED"}
      </button>

    </div>
    </div>
  );


    return (

      <List />


    );
  }
}

export default Searchbooks;
