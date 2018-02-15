import React, { Component } from "react";
import Header from "./Header/";
import PopularDirections from "./TopDestinations";
import "normalize.css";
import "flexboxgrid2";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PopularDirections />
      </div>
    );
  }
}

export default App;
