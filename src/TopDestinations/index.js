import React from "react";
import styled from "styled-components";
import Destinations from "./Destinations";
import compass from "./compass.svg";
import pencil from "./pencil.svg";
import common from "./common.svg";
import beach from "./beach.svg";
import shopping from "./shopping.svg";
import history from "./history.svg";
import nightlife from "./nightlife.svg";
import family from "./family.svg";

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

function Category(props) {
  return (
    <div>
      <CategoryIcon src={props.src} />
      <CategoryText>{props.text}</CategoryText>
    </div>
  );
}

export default () => (
  <Wrapper>
    <img src={compass} alt="" />
    <p>Популярные направления перелетов из города Москва</p>
    <img src={pencil} alt="" />
    <div className="container">
      <Categories>
        <div className="row">
          <div className="col-xs-4">
            <Category src={common} text="куда угодно" />
          </div>
          <div className="col-xs-4">
            <Category src={beach} text="солнце и море" />
          </div>
          <div className="col-xs-4">
            <Category src={shopping} text="шопинг, город" />
          </div>
          <div className="col-xs-4">
            <Category src={history} text="культура и история" />
          </div>
          <div className="col-xs-4">
            <Category src={nightlife} text="ночная жизнь" />
          </div>
          <div className="col-xs-4">
            <Category src={family} text="отдых с детьми" />
          </div>
        </div>
      </Categories>
    </div>
    <Destinations />
  </Wrapper>
);
