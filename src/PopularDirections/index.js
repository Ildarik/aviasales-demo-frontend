import React from "react";
import styled from "styled-components";
import calendar from "./calendar.svg";
import flag_ru from "./flag-ru.svg";
import flag_am from "./flag-am.svg";
import flag_md from "./flag-md.svg";

const Wrapper = styled.section``;

const Heading = styled.h2``;

const Destinations = styled.div``;

const Destination = styled.div``;

const DestinationNotes = styled.div``;

function DestinationHeader(props) {
  return (
    <div>
      <img src={props.flag} alt="" />
      <div>
        {props.city}
        <div>{props.country}</div>
      </div>
    </div>
  );
}

function DestinationRoutes() {
  return (
    <div>
      <div>
        <a href="">Из Москвы</a>
        <a href="">От 4 813 Р</a>
      </div>
      <div>
        <a href="">Из Санкт-Петербурга</a>
        <a href="">От 7 857 Р</a>
      </div>
      <div>
        <a href="">Из Новосибирска</a>
        <a href="">От 15 127 Р</a>
      </div>
      <div>
        <a href="">Из Екатеринбурга</a>
        <a href="">От 9 275 Р</a>
      </div>
      <div>
        <a href="">Из Челябинска</a>
        <a href="">От 9 148 Р</a>
      </div>
    </div>
  );
}

export default () => (
  <Wrapper>
    <div>
      <img src={calendar} alt="Календарь" />
    </div>
    <Heading>Лучшие цены на авиабилеты за последний месяц</Heading>
    <Destinations>
      <Destination>
        <DestinationHeader
          flag={flag_ru}
          city="Симферополь (Крым)"
          country="Крым"
        />
        <DestinationRoutes />
      </Destination>
      <Destination>
        <DestinationHeader flag={flag_am} city="Ереван" country="Армения" />
        <DestinationRoutes />
      </Destination>
      <Destination>
        <DestinationHeader flag={flag_md} city="Кишинев" country="Молдавия" />
        <DestinationRoutes />
      </Destination>
      <DestinationNotes>
        <p>
          Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
          мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
          авиакомпаний.
        </p>
        <small>
          <small>
            Цены, найденные пользователями за последние 48 часов, не являются
            офертой.
          </small>
        </small>
      </DestinationNotes>
    </Destinations>
  </Wrapper>
);
