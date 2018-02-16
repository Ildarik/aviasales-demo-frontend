import React from "react";
import styled from "styled-components";
import vk from "./vk.svg";
import fb from "./fb.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import viber from "./viber.svg";
import appstore from "./appstore.svg";
import googleplay from "./googleplay.svg";
import windowsphone from "./windowsphone.svg";

const Wrapper = styled.section``;

export default () => (
  <Wrapper>
    <nav>
      <div>СТРАНЫ</div>
      <ul>
        <li>
          <a href="">Россия</a>
        </li>
        <li>
          <a href="">Тайланд</a>
        </li>
        <li>
          <a href="">Черногория</a>
        </li>
        <li>
          <a href="">Кипр</a>
        </li>
        <li>
          <a href="">Болгария</a>
        </li>
        <li>
          <a href="">Грузия</a>
        </li>
        <li>
          <a href="">Все страны</a>
        </li>
      </ul>
    </nav>
    <nav>
      <div>ГОРОДА</div>
      <ul>
        <li>
          <a href="">Москва</a>
        </li>
        <li>
          <a href="">Санкт-Петербург</a>
        </li>
        <li>
          <a href="">Симферополь</a>
        </li>
        <li>
          <a href="">Адлер</a>
        </li>
        <li>
          <a href="">Екатеринбург</a>
        </li>
        <li>
          <a href="">Лондон</a>
        </li>
        <li>
          <a href="">Все города</a>
        </li>
      </ul>
    </nav>
    <nav>
      <div>АВИАКОМПАНИИ</div>
      <ul>
        <li>
          <a href="">Air Berlin</a>
        </li>
        <li>
          <a href="">Air France</a>
        </li>
        <li>
          <a href="">Alitalia</a>
        </li>
        <li>
          <a href="">Air Baltic</a>
        </li>
        <li>
          <a href="">Emirates</a>
        </li>
        <li>
          <a href="">KLM</a>
        </li>
        <li>
          <a href="">Все авиакомпании</a>
        </li>
      </ul>
    </nav>
    <nav>
      <div>АЭРОПОРТЫ</div>
      <ul>
        <li>
          <a href="">Шереметьево</a>
        </li>
        <li>
          <a href="">Курумоч</a>
        </li>
        <li>
          <a href="">Домодедово</a>
        </li>
        <li>
          <a href="">Толмачево</a>
        </li>
        <li>
          <a href="">Владивосток</a>
        </li>
        <li>
          <a href="">Гамбург</a>
        </li>
        <li>
          <a href="">Все аэропорты</a>
        </li>
      </ul>
    </nav>
    <nav>
      <div>НАПРАВЛЕНИЯ</div>
      <ul>
        <li>
          <a href="">MOW - SIP</a>
        </li>
        <li>
          <a href="">MOW - AER</a>
        </li>
        <li>
          <a href="">MOW - TIV</a>
        </li>
        <li>
          <a href="">MOW - MRV</a>
        </li>
        <li>
          <a href="">LED - MOW</a>
        </li>
        <li>
          <a href="">MOW - BKK</a>
        </li>
      </ul>
    </nav>
    <nav>
      <div>СЕРВИСЫ</div>
      <ul>
        <li>
          <a href="">Горящие авиабилеты</a>
        </li>
        <li>
          <a href="">Календарь низких цен</a>
        </li>
        <li>
          <a href="">Карта низких цен</a>
        </li>
        <li>
          <a href="">Спецпредложения</a>
        </li>
        <li>
          <a href="">Таблица цен</a>
        </li>
        <li>
          <a href="">Блог</a>
        </li>
        <li>
          <a href="">Помощь</a>
        </li>
      </ul>
    </nav>
    <div>
      <nav>
        <ul>
          <li>
            <a href="">О компании</a>
          </li>
          <li>
            <a href="">Партнерская программа</a>
          </li>
          <li>
            <a href="">Реклама</a>
          </li>
          <li>
            <a href="">Вакансии</a>
          </li>
          <li>
            <a href="">Помощь</a>
          </li>
          <li>
            <a href="">Правила</a>
          </li>
          <li>
            <a href="">White Label Авиабилеты</a>
          </li>
        </ul>
      </nav>
      <ul>
        <li>
          <a href="">
            <img src={vk} alt="" /> Вконтакте
          </a>
        </li>
        <li>
          <a href="">
            <img src={fb} alt="" />Фейсбук
          </a>
        </li>
        <li>
          <a href="">
            <img src={instagram} alt="" /> Инстаграм
          </a>
        </li>
        <li>
          <a href="">
            <img src={twitter} alt="" /> Твиттер
          </a>
        </li>
        <li>
          <a href="">
            <img src={viber} alt="" /> Вайбер
          </a>
        </li>
      </ul>
      <div>Поиск и бронирование отелей</div>
    </div>
    <div>
      <a>
        <img src={appstore} alt="" />
      </a>
      <a>
        <img src={googleplay} alt="" />
      </a>
      <a>
        <img src={windowsphone} alt="" />
      </a>
    </div>
    <div>© 2007–2018, Aviasales — дешевые авиабилеты</div>
  </Wrapper>
);
