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
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const CategoryIcon = styled.img`
  margin: 10px;
`;

const CategoryText = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  margin: 10px;
  color: #00ace2;
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

const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
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
        <div className="col-xs-10 col-md-6 col-lg-4">
          <Title>
            Популярные направления перелетов из города <City>Москва</City>
            <Pencil src={pencil} alt="" />
          </Title>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-12 col-md-10 col-lg-6">
          <Categories>
            <Category src={common} text="куда угодно" />
            <Category src={beach} text="солнце и море" />
            <Category src={shopping} text="шопинг, город" />
            <Category src={history} text="культура и история" />
            <Category src={nightlife} text="ночная жизнь" />
            <Category src={family} text="отдых с детьми" />
          </Categories>
        </div>
      </div>
      <Destinations />
    </div>
  </Wrapper>
);
