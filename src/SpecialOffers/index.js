import React from "react";
import styled from "styled-components";
import pobeda from "./pobeda.svg";
import alliance from "./alliance.svg";
import lufthansa from "./lufthansa.svg";

const Heading = styled.h2`
  margin-top: 20px;
  margin-left: 10px;
  color: #fff;
  font-size: 28px;
`;

const Wrapper = styled.div`
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
`;

const Logo = styled.div`
  padding: 20px 10px;
  background: #fff;
  align-self: stretch;
`;

const OfferHeading = styled.div`
  padding: 10px;
  background: #cd2027;
  width: 100%;
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`;

const ReadMore = styled.button`
  padding: 10px 0;
  display: block;
  width: 100%;
  font-size: 16px;
  color: #d93533;
  line-height: 20px;
  border: 2px solid #cd1f27;
  border-radius: 3px;
  background: #fff;
  margin-bottom: 10px;
`;

const OfferData = styled.div`
  background: #fff;
  line-height: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const OfferDescription = styled.div`
  background: #fff;
  padding: 20px 10px;
  font-size: 12px;
  min-height: 92px;
`;

const OfferWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrrap;
`;

const OfferMain = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OfferPrice = styled.div`
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 5px;
  font-size: 20px;
`;

const OfferDate = styled.div`
  align-self: flex-end;
  margin: 5px;
  font-size: 12px;
  color: #d93633;
`;

const OfferBodyWrapper = styled.div`
  padding: 13px 8px;
  background: #fff;
  margin-bottom: 10px;
`;

const HeadingName = styled.div`
  align-self: center;
`;

const HeadingIcon = styled.div`
  min-height: 38px;
`;

const Footer = styled.div`
  margin: 20px 20px;
  padding-bottom: 20px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 1.5;
`;

const AllOffers = styled.div`
  text-decoration: underline;
`;

function Offer(props) {
  return (
    <OfferWrapper>
      <OfferHeading>
        <HeadingName>{props.heading}</HeadingName>
        <HeadingIcon>
          <img src={props.alliance} alt="" />
        </HeadingIcon>
      </OfferHeading>
      <OfferBodyWrapper>
        <OfferMain>
          <Logo>
            <img src={props.logo} alt="" />
          </Logo>
          <OfferData>
            <OfferPrice>от {props.price} Р</OfferPrice>
            <OfferDate>Осталось {props.days} дней</OfferDate>
          </OfferData>
        </OfferMain>
        <OfferDescription>{props.description}</OfferDescription>
        <ReadMore>Узнать подробности</ReadMore>
      </OfferBodyWrapper>
    </OfferWrapper>
  );
}

export default () => (
  <Wrapper>
    <div className="container">
      <div className="row center-xs">
        <Heading>Спецпредложения на авиабилеты</Heading>
      </div>
      <div className="row center-xs">
        <div className="col-xs-12 col-md-4 col-xl-4">
          <Offer
            heading="Билеты от 499 рублей!"
            logo={pobeda}
            price="499"
            days="45"
            description="Билеты от 499 рублей! Специальное предложение от авиакомпании Победа"
          />
        </div>
        <div className="col-xs-12 col-md-4 col-xl-4">
          <Offer
            heading="В Нью-Йорк от 20 680 ₽"
            alliance={alliance}
            logo={lufthansa}
            price="20 680"
            days="19"
            description="Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa"
          />
        </div>
        <div className="col-xs-12 col-md-4 col-xl-4">
          <Offer
            heading="В Лос-Анджелес от…"
            alliance={alliance}
            logo={lufthansa}
            price="20 360"
            days="19"
            description="Из Москвы в США от 22360 рублей! Специальное предложение от авиакомпании Lufthansa"
          />
        </div>
      </div>
      <Footer>
        <div className="container">
          <div className="row between-xs">
            <AllOffers>Смотреть все спецпредложения</AllOffers>
            <div>* средняя цена по направлению</div>
          </div>
        </div>{" "}
      </Footer>
    </div>
  </Wrapper>
);
