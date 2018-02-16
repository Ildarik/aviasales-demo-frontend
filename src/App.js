import React, { Component } from "react";
import Header from "./Header/";
import PopularDirections from "./PopularDirections";
import TopDestinations from "./TopDestinations";
import SpecialOffers from "./SpecialOffers";
import Articles from "./Articles";
import MobileApps from "./MobileApps";
import "normalize.css";
import "flexboxgrid2";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TopDestinations />
        <PopularDirections />
        <SpecialOffers />
        <Articles />
        <MobileApps />
      </div>
    );
  }
}

export default App;
