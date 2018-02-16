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
import "flexboxgrid2";

const Wrapper = styled.section`
  background: #f8fcff;
`;
const Categories = styled.div`
  margin: 30px 10px;
`;
const CategoryIcon = styled.img`
  margin: 10px;
`;
const CategoryText = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  margin: 10px;
`;

const CategoryWrapper = styled.a`
  margin: 0;
  padding: 0;
`;

function Category(props) {
  return (
    <CategoryWrapper>
      <CategoryIcon src={props.src} />
      <CategoryText>{props.text}</CategoryText>
    </CategoryWrapper>
  );
}

const Title = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  font-style: normal;
`;

const Compass = styled.img`
  margin: 40px;
`;

const City = styled.a`
  color: #1cade0;
`;

const Pencil = styled.img`
  margin-left: 5px;
`;

export default () => (
  <Wrapper>
    <div className="container">
      <div className="row center-xs">
        <div>
          <Compass src={compass} alt="" />
        </div>
      </div>
      <div className="row center-xs">
        <Title>
          Популярные направления перелетов из города <City>Москва</City>
          <Pencil src={pencil} alt="" />
        </Title>
      </div>
      <div className="container">
        <Categories>
          <div className="row center-xs">
            <div className="col-xs-4 col-md-2 col-lg-1">
              <Category src={common} text="куда угодно" />
            </div>
            <div className="col-xs-4 col-md-2 col-lg-1">
              <Category src={beach} text="солнце и море" />
            </div>
            <div className="col-xs-4 col-md-2 col-lg-1">
              <Category src={shopping} text="шопинг, город" />
            </div>
            <div className="col-xs-4 col-md-2 col-lg-1">
              <Category src={history} text="культура и история" />
            </div>
            <div className="col-xs-4 col-md-2 col-lg-1">
              <Category src={nightlife} text="ночная жизнь" />
            </div>
            <div className="col-xs-4 col-md-2 col-lg-1">
              <Category src={family} text="отдых с детьми" />
            </div>
          </div>
        </Categories>
      </div>
      <Destinations />
    </div>
  </Wrapper>
);
