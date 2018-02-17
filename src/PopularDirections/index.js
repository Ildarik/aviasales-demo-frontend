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

const Destinations = styled.div``;

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
`;

const DestinationRouteWrapper = styled.div`
  margin: 10px;
`;

const DestinationCity = styled.div`
  font-size: 22px;
  color: #5b5b5c;
  margin-bottom: 5px;
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
`;

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
      <div className="row middle-xs">
        <div className="col-xs-2">
          <img src={props.flag} alt="" />
        </div>
        <div className="col-xs-10">
          <DestinationCity>{props.city}</DestinationCity>
          <Country>{props.country}</Country>
        </div>
      </div>
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
      <div className="row">
        <div className="col-xs-12 col-md-10 col-lg-4">
          <Destinations>
            <Destination>
              <DestinationHeader
                flag={flag_ru}
                city="Симферополь (Крым)"
                country="КРЫМ"
              />
              <DestinationRoutes />
            </Destination>
            <Destination>
              <DestinationHeader
                flag={flag_am}
                city="Ереван"
                country="АРМЕНИЯ"
              />
              <DestinationRoutes />
            </Destination>
            <Destination>
              <DestinationHeader
                flag={flag_md}
                city="Кишинев"
                country="МОЛДАВИЯ"
              />
              <DestinationRoutes />
            </Destination>
          </Destinations>
        </div>
      </div>
    </div>
    <DestinationNote>
      <div className="row center-xs">
        Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
        мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
        авиакомпаний.
      </div>
    </DestinationNote>
    <DestinationNoteSmall>
      <div className="row center-xs">
        Цены, найденные пользователями за последние 48 часов, не являются
        офертой.
      </div>
    </DestinationNoteSmall>
  </div>
);
