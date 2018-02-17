import React from "react";
import styled from "styled-components";
import calendar from "./calendar.svg";
import flag_ru from "./flag-ru.svg";
import flag_am from "./flag-am.svg";
import flag_md from "./flag-md.svg";

const Heading = styled.h2`
  font-size: 18px;
  font-style: normal;
`;

const Destination = styled.div``;

const DestinationNote = styled.div`
  margin: 40px 20px;
  line-height: 1.5;
`;
const DestinationNoteSmall = styled.div`
  margin: 30px 40px;
  line-height: 1.5;
  font-size: 14px;
  color: #a0b0b9;
`;

const Calendar = styled.img`
  margin: 40px;
`;

const DestinationWrapper = styled.div`
  margin: 20px;
  display: flex;
`;

const DestinationRouteWrapper = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

const DestinationCity = styled.div`
  font-size: 22px;
  color: #5b5b5c;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Country = styled.div`
  font-size: 12px;
  color: #a0b0b9;
`;

const City = styled.div`
  font-size: 16px;
  color: #4a4a4a;
`;

const Price = styled.div`
  font-size: 16px;
  color: #00bae8;
  text-align: right;
  align-self: flex-end;
`;

const Flag = styled.img``;

const DestinationHeading = styled.div``;

function DestinationRoute(props) {
  return (
    <DestinationRouteWrapper>
      <City>{props.city}</City>
      <Price>от {props.price} ₽</Price>
    </DestinationRouteWrapper>
  );
}

function DestinationHeader(props) {
  return (
    <DestinationWrapper>
      <Flag src={props.flag} alt="" />
      <DestinationHeading>
        <DestinationCity>{props.city}</DestinationCity>
        <Country>{props.country}</Country>
      </DestinationHeading>
    </DestinationWrapper>
  );
}

function DestinationRoutes() {
  return (
    <div>
      <DestinationRoute city="Из Москвы" price="4 813" />
      <DestinationRoute city="Из Санкт-Петербурга" price="7 857" />
      <DestinationRoute city="Из Новосибирска" price="15 127" />
      <DestinationRoute city="Из Екатеринбурга" price="9 275" />
      <DestinationRoute city="Из Челябинска" price="9 148" />
    </div>
  );
}

export default () => (
  <div className="container">
    <div className="row center-xs">
      <Calendar src={calendar} alt="Календарь" />
    </div>
    <div className="row center-xs">
      <Heading>Лучшие цены на авиабилеты за последний месяц</Heading>
    </div>
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-12 col-md-10 col-lg-4">
          <Destination>
            <DestinationHeader
              flag={flag_ru}
              city="Симферополь (Крым)"
              country="КРЫМ"
            />
            <DestinationRoutes />
          </Destination>
        </div>
        <div className="col-xs-12 col-md-10 col-lg-4">
          <Destination>
            <DestinationHeader flag={flag_am} city="Ереван" country="АРМЕНИЯ" />
            <DestinationRoutes />
          </Destination>
        </div>
        <div className="col-xs-12 col-md-10 col-lg-4">
          <Destination>
            <DestinationHeader
              flag={flag_md}
              city="Кишинев"
              country="МОЛДАВИЯ"
            />
            <DestinationRoutes />
          </Destination>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-lg-12">
        <DestinationNote>
          <div className="row center-xs">
            <div className="col-xs-12 col-md-10 col-lg-6">
              Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
              стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств
              и 728 авиакомпаний.
            </div>
          </div>
        </DestinationNote>
        <DestinationNoteSmall>
          <div className="row center-xs">
            Цены, найденные пользователями за последние 48 часов, не являются
            офертой.
          </div>
        </DestinationNoteSmall>
      </div>
    </div>
  </div>
);
