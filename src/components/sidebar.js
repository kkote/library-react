
import React from "react";

const Sidebar = props => {
  return (

    <div id="sidebar">
      <div className="inner">
        <div id="searchbar" className="">
          <form>
            <input type="text" placeholder="Find Books..." id="searchBooks" className="sideInput input" name="searchBooks" />
              <button type="button" id="buttonForSearch">
                Search</button>
          </form>

          </div>
          <header className="major">
            <h2>Results</h2>
          </header>
          <div id="list" className=""></div>
        </div>
      </div>);
}

export default Sidebar;
