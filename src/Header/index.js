import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

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
  background: #ff9241;
  color: #fff;
  width: 100%;
  margin-top: 13px;
  padding: 17px;
  border: 0;
`;

const Logo = styled.img``;

const Input = styled.input`
  width: 100%;
  padding: 16px 14px;
  margin-bottom: 1px;
`;

const Searchform = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 88px;
`;

const SplitRow = styled.div`
  display: flex;
`;

export default () => (
  <Wrapper>
    <div className="container">
      <Logo src={logo} />
      <HeaderTitle>Поиск дешевых авибилетов</HeaderTitle>
      <Searchform>
        <Input placeholder="Москва" />
        <Input placeholder="Город прибытия" />
        <SplitRow>
          <Input placeholder="Туда" />
          <Input placeholder="Обратно" />
        </SplitRow>
        <Input placeholder="1 пассажир, эконом" />
        <Button>Найти билеты</Button>
      </Searchform>
    </div>
  </Wrapper>
);
