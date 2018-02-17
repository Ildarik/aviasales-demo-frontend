import React, { Component } from "react";
import styled from "styled-components";
import krasnodar from "./krasnodar.png";
import adler from "./adler.png";
import spb from "./spb.png";
import minvody from "./minvody.png";
import krym from "./krym.png";
import barsa from "./barsa.png";

const Wrapper = styled.section``;

const City = styled.div`
  margin: 10px;
  font-size: 16px;
  color: #5b5b5c;
`;

const Country = styled.div`
  margin: 10px;
  font-size: 12px;
  color: #a0b0b9;
`;

const Price = styled.div`
  margin: 10px;
  font-size: 14px;
  color: #00bae8;
  text-align: right;
`;

const DestinationDate = styled.div`
  margin: 10px;
  font-size: 12px;
  color: #a0b0b9;
  text-align: right;
`;

const DestinationWrapper = styled.div`
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  margin: 15px;
`;

class Destination extends Component {
  render() {
    return (
      <div className="container">
        <DestinationWrapper>
          <img src={this.props.src} alt={this.props.city} />
          <div className="row">
            <div className="col-xs-6">
              <City>{this.props.city}</City>
              <Country>{this.props.country}</Country>
            </div>
            <div className="col-xs-6">
              <Price>Найти от {this.props.price} ₽</Price>
              <DestinationDate>{this.props.date}</DestinationDate>
            </div>
          </div>
        </DestinationWrapper>
      </div>
    );
  }
}

export default () => (
  <Wrapper>
    <div className="container">
      <div className="row center">
        <Destination
          src={krasnodar}
          city="Краснодар"
          country="РОССИЯ"
          price="1 212"
          date="18 марта"
        />
        <Destination
          src={adler}
          city="Сочи (Адлер)"
          country="РОССИЯ"
          price="1 334"
          date="27 марта"
        />
        <Destination
          src={spb}
          city="Санкт-Петербург"
          country="РОССИЯ"
          price="1 508"
          date="19 февраля"
        />
        <Destination
          src={minvody}
          city="Минеральные воды"
          country="РОССИЯ"
          price="2 074"
          date="13 марта"
        />
        <Destination
          src={krym}
          city="Симферополь (Крым)"
          country="КРЫМ"
          price="2 407"
          date="13 марта"
        />
        <Destination
          src={barsa}
          city="Барселона"
          country="ИСПАНИЯ"
          price="4 247"
          date="24 марта"
        />
      </div>
    </div>
  </Wrapper>
);
