import React, { Component } from "react";
import Header from "./Header/";
import PopularDirections from "./PopularDirections";
import TopDestinations from "./TopDestinations";
import SpecialOffers from "./SpecialOffers";
import Articles from "./Articles";
import MobileApps from "./MobileApps";
import Footer from "./Footer";
import Agencies from "./Agencies";
import Subscribe from "./Subscribe";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TopDestinations />
        <PopularDirections />
        <Agencies />
        <Subscribe />
        <SpecialOffers />
        <Articles />
        <MobileApps />
        <Footer />
      </div>
    );
  }
}

export default App;
