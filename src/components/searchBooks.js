import React from "react";


class Searchbooks extends React.Component {
   render() {
      // details is all the githubdata coming from the details prop above
      const { details } = this.props;

      return (
         <div>{details.volumeInfo.title}</div>
      );
   }
}

export default Searchbooks;
