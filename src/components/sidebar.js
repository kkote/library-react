import React from "react";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      value: "Pythons",
      error: "error"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    this.setState({ value: event.target.value });
  }

  render() {
    const { handleSubmit } = this.props;
    const { value } = this.state;

    return (
      <div id="sidebar">
        <div className="inner">
          <div id="searchbar" className="">
            <form onSubmit={this.props.handleSubmit}>
              <input
                type="text"
                name="search"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button type="submit" >
                Search
              </button>
            </form>
          </div>
          <header className="major">
            <h2>Results</h2>
          </header>
          <div id="list" className="" />
        </div>
      </div>
    );
  }
}

export default Sidebar;
