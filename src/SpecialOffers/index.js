import React from "react";
import styled from "styled-components";
import pobeda from "./pobeda.svg";

const Heading = styled.h2``;

const Wrapper = styled.section``;
const Footer = styled.div``;

function SpecialOffer() {
  return (
    <div>
      <div>Билеты от 499 рублей!</div>
      <img src={pobeda} alt="Победа" />
      <div>От 499 Р</div>
      <div>Осталось 45 дней</div>
      <p>
        Билеты от 499 рублей! Специальное предложение от авиакомпании Победа
      </p>
    </div>
  );
}

export default () => (
  <Wrapper>
    <Heading>Спецпредложения на авиабилеты</Heading>
    <SpecialOffer />
    <SpecialOffer />
    <SpecialOffer />
    <Footer>
      <a href="">Смотреть все спецпредложения</a>
      <span>* средняя цена по направлению</span>
    </Footer>
  </Wrapper>
);
