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
`;

const Country = styled.div`
  margin: 10px;
`;

const Price = styled.div`
  margin: 10px;
`;

const Date = styled.div`
  margin: 10px;
`;

const DestinationWrapper = styled.div`
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
              <Price>Найти от {this.props.price}р</Price>
              <Date>{this.props.date}</Date>
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
          price="1212"
          date="18 марта"
        />
        <Destination
          src={adler}
          city="Сочи (Адлер)"
          country="РОССИЯ"
          price="1334"
          date="27 марта"
        />
        <Destination
          src={spb}
          city="Санкт-Петербург"
          country="РОССИЯ"
          price="1508"
          date="19 февраля"
        />
        <Destination
          src={minvody}
          city="Минеральные воды"
          country="РОССИЯ"
          price="2074"
          date="13 марта"
        />
        <Destination
          src={krym}
          city="Симферополь (Крым)"
          country="КРЫМ"
          price="2407"
          date="13 марта"
        />
        <Destination
          src={barsa}
          city="Барселона"
          country="ИСПАНИЯ"
          price="4247"
          date="24 марта"
        />
      </div>
    </div>
  </Wrapper>
);
