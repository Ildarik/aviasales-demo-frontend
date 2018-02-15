import React, { Component } from "react";
import styled from "styled-components";
import krasnodar from "./krasnodar.png";
import adler from "./adler.png";
import spb from "./spb.png";
import minvody from "./minvody.png";
import krym from "./krym.png";
import barsa from "./barsa.png";

const Wrapper = styled.section``;

class Destination extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.city} />
        <div>{this.props.city}</div>
        <div>{this.props.country}</div>
        <div>Найти от {this.props.price}р</div>
        <div>{this.props.date}</div>
      </div>
    );
  }
}

export default () => (
  <Wrapper>
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
  </Wrapper>
);
