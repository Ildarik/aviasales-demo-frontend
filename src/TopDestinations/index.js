import React, { Component } from "react";
import styled from "styled-components";
import Destinations from "./Destinations";
import compass_icon from "./compass-icon.svg";
import pencil_icon from "./pencil-icon.svg";
import common_icon from "./common-icon.svg";
import beach_icon from "./beach-icon.svg";
import shopping_icon from "./shopping-icon.svg";
import history_icon from "./history-icon.svg";
import nightlife_icon from "./nightlife-icon.svg";
import family_icon from "./family-icon.svg";

const Wrapper = styled.section`
  background: #f8fcff;
`;
const Categories = styled.ul`
  list-style: none;
`;
const CategoryIcon = styled.img``;
const CategoryText = styled.div`
  text-transform: uppercase;
`;

class Category extends Component {
  render() {
    return (
      <div>
        <CategoryIcon src={this.props.src} />
        <CategoryText>{this.props.text}</CategoryText>
      </div>
    );
  }
}

export default () => (
  <Wrapper>
    <img src={compass_icon} alt="" />
    <p>Популярные направления перелетов из города Москва</p>
    <img src={pencil_icon} alt="" />
    <div className="container">
      <Categories>
        <div className="row">
          <div className="col-xs-4">
            <Category src={common_icon} text="куда угодно" />
          </div>
          <div className="col-xs-4">
            <Category src={beach_icon} text="солнце и море" />
          </div>
          <div className="col-xs-4">
            <Category src={shopping_icon} text="шопинг, город" />
          </div>
          <div className="col-xs-4">
            <Category src={history_icon} text="культура и история" />
          </div>
          <div className="col-xs-4">
            <Category src={nightlife_icon} text="ночная жизнь" />
          </div>
          <div className="col-xs-4">
            <Category src={family_icon} text="отдых с детьми" />
          </div>
        </div>
      </Categories>
    </div>
    <Destinations />
  </Wrapper>
);
