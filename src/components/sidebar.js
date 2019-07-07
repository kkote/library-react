import React from "react";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      searchInput: "",
      value: "Python",
      error: "error"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
      <input type="text" name="search" value={this.state.value} onChange={this.handleChange}/>
      <button type="submit">
        Search
      </button>
    </form>
  );
  }
}

export default Sidebar;
