import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import aero from "./aero.svg";
import swap_places from "./swap-places.svg";
import calendar from "./calendar.svg";
import triangle from "./triangle.svg";

const Wrapper = styled.section`
  padding-top: 10px;
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
`;

const HeaderTitle = styled.h1`
  margin-top: 30px;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 100px;
    font-size: 34px;
  }
`;

const Button = styled.button`
  display: inline-block;
  background: #ff9241;
  color: #fff;
  margin-top: 13px;
  padding: 17px 40px;
  border: 0;
  font-size: 24px;
  font-weight: 900;

  @media (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 60px;
  }

  @media (min-width: 1200px) {
    margin-top: 40px;
    margin-bottom: 120px;
  }
`;

const Logo = styled.img``;

const Input = styled.input`
  width: 100%;
  position: relative;
  padding: 16px 14px;
  margin-bottom: 1px;
  display: inline-block;
`;

const Searchform = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 88px;
`;

const SplitRow = styled.div`
  display: flex;
`;

const InputWrapper = styled.div`
  position: relative;
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 1200px) {
    flex-basis: 25%;
  }
`;
const Narrow = styled.div`
  position: relative;
  flex-basis: 50%;

  @media (min-width: 768px) {
    flex-basis: 25%;
  }
  @media (min-width: 1200px) {
    flex-basis: 12.5%;
  }
`;

const Abbreviation = styled.span`
  position: absolute;
  font-size: 16px;
  top: 18px;
  right: 43px;
  color: #a0b0b9;
`;

const InputIcon = styled.img`
  position: absolute;
  top: 18px;
  right: 13px;
`;

const Triangle = styled.img`
  position: absolute;
  right: 13px;
  top: 23px;
`;

const SubTitle = styled.h2`
  display: none;

  @media (min-width: 768px) {
    display: block;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 45px;
  }
`;

export default () => (
  <Wrapper>
    <div className="container">
      <Logo src={logo} />
      <div className="row center-xs">
        <HeaderTitle>Поиск дешевых авибилетов</HeaderTitle>
      </div>
      <div className="row center-xs">
        <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
      </div>
      <Searchform>
        <InputWrapper>
          <Input placeholder="Москва" />
          <Abbreviation>MOW</Abbreviation>
          <InputIcon src={swap_places} />
        </InputWrapper>
        <InputWrapper>
          <Input placeholder="Город прибытия" />{" "}
        </InputWrapper>
        <Narrow>
          <Input placeholder="Туда" />
          <InputIcon src={calendar} />
        </Narrow>
        <Narrow>
          <Input placeholder="Обратно" />
          <InputIcon src={calendar} />
        </Narrow>
        <InputWrapper>
          <Input placeholder="1 пассажир, эконом" />
          <Triangle src={triangle} />
        </InputWrapper>
        <Button>
          Найти билеты <img src={aero} alt="" />
        </Button>
      </Searchform>
    </div>
  </Wrapper>
);
