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
  padding-top: 30px;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;
`;

const Button = styled.button`
  display: inline-block;

  background: #ff9241;
  color: #fff;
  width: 100%;
  margin-top: 13px;
  padding: 17px;
  border: 0;
  font-size: 24px;
  font-weight: 900;
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
  padding-bottom: 88px;
`;

const SplitRow = styled.div`
  display: flex;
`;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
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

export default () => (
  <Wrapper>
    <div className="container">
      <Logo src={logo} />
      <HeaderTitle>Поиск дешевых авибилетов</HeaderTitle>
      <Searchform>
        <InputWrapper>
          <Input placeholder="Москва" />
          <Abbreviation>MOW</Abbreviation>
          <InputIcon src={swap_places} />
        </InputWrapper>
        <Input placeholder="Город прибытия" />
        <SplitRow>
          <InputWrapper>
            <Input placeholder="Туда" />
            <InputIcon src={calendar} />
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="Обратно" />
            <InputIcon src={calendar} />
          </InputWrapper>
        </SplitRow>
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
