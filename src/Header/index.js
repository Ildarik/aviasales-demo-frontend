import React from "react";
import styled from "styled-components";
import logo_icon from "./logo-icon.svg";
// import aero from "./aero-icon.svg";

const Wrapper = styled.section`
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
  color: #ffffff;
`;

const Button = styled.button`
  background: #ff9241;
  color: #fff;
  background-image: url(aero);
`;

export default () => (
  <Wrapper>
    <img src={logo_icon} alt="" />
    <HeaderTitle>Поиск дешевых авибилетов</HeaderTitle>
    <form action="">
      <input type="text" placeholder="Москва" />
      <input type="text" placeholder="Город прибытия" />
      <input type="text" placeholder="Туда" />
      <input type="text" placeholder="Обратно" />
      <select name="passengers">
        <option value="1" selected>
          1 пассажир, эконом
        </option>
      </select>
    </form>
    <Button>Найти билеты</Button>
  </Wrapper>
);
