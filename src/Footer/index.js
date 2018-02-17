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

const Links = styled.ul`
  list-style: none;
  font-size: 12px;
  padding: 0;
`;

const LinksTitle = styled.h3`
  margin-top: 30px;
  font-size: 12px;
  color: #4a4a4a;
`;

const Link = styled.li`
  margin-top: 10px;
  color: #5b5b5c;
`;

const SocialLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #4a4a4a;
  margin-right: 30px;
  margin-top: 10px;
`;

const MainLink = styled.li`
  display: inline;
  margin-right: 10px;
  color: #5b5b5c;
  line-height: 2;
`;

const SocialIcon = styled.img`
  margin-right: 5px;
`;

const Note = styled.p`
  margin-top: 22px;
  font-size: 12px;
  color: #5b5b5c;
  text-align: center;
`;

const Copyright = styled.div`
  font-size: 12px;
  color: #5b5b5c;
  margin: 20px;
`;

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-6 col-md-3 col-lg-2">
        <nav>
          <LinksTitle>СТРАНЫ</LinksTitle>
          <Links>
            <Link>Россия</Link>
            <Link>Тайланд</Link>
            <Link>Черногория</Link>
            <Link>Кипр</Link>
            <Link>Болгария</Link>
            <Link>Грузия</Link>
            <Link>Все страны →</Link>
          </Links>
        </nav>
      </div>
      <div className="col-xs-6 col-md-3 col-lg-2">
        <nav>
          <LinksTitle>ГОРОДА</LinksTitle>
          <Links>
            <Link>Москва</Link>
            <Link>Санкт-Петербург</Link>
            <Link>Симферополь</Link>
            <Link>Адлер</Link>
            <Link>Екатеринбург</Link>
            <Link>Лондон</Link>
            <Link>Все города →</Link>
          </Links>
        </nav>
      </div>
      <div className="col-xs-6 col-md-3 col-lg-2">
        <nav>
          <Links>
            <LinksTitle>АВИАКОМПАНИИ</LinksTitle>
            <Link>Air Berlin</Link>
            <Link>Air France</Link>
            <Link>Alitalia</Link>
            <Link>Air Baltic</Link>
            <Link>Emirates</Link>
            <Link>KLM</Link>
            <Link>Все авиакомпании →</Link>
          </Links>
        </nav>
      </div>
      <div className="col-xs-6 col-md-3 col-lg-2">
        <nav>
          <Links>
            <LinksTitle>АЭРОПОРТЫ</LinksTitle>
            <Link>Шереметьево</Link>
            <Link>Курумоч</Link>
            <Link>Домодедово</Link>
            <Link>Толмачево</Link>
            <Link>Владивосток</Link>
            <Link>Гамбург</Link>
            <Link>Все аэропорты →</Link>
          </Links>
        </nav>
      </div>
      <div className="col-xs-6 col-md-3 col-lg-2">
        <nav>
          <Links>
            <LinksTitle>НАПРАВЛЕНИЯ</LinksTitle>
            <Link>MOW - SIP</Link>
            <Link>MOW - AER</Link>
            <Link>MOW - TIV</Link>
            <Link>MOW - MRV</Link>
            <Link>LED - MOW</Link>
            <Link>MOW - BKK</Link>
          </Links>
        </nav>
      </div>
      <div className="col-xs-6 col-md-3 col-lg-2">
        <nav>
          <LinksTitle>СЕРВИСЫ</LinksTitle>
          <Links>
            <Link>Горящие авиабилеты</Link>
            <Link>Календарь низких цен</Link>
            <Link>Карта низких цен</Link>
            <Link>Спецредложения</Link>
            <Link>Таблица цен</Link>
            <Link>Блог</Link>
            <Link>Помощь</Link>
          </Links>
        </nav>
      </div>
    </div>
    <div>
      <div className="row">
        <div className="col-xs-12">
          <nav>
            <Links>
              <MainLink>О компании</MainLink>
              <MainLink>Партнерская программа</MainLink>
              <MainLink>Реклама</MainLink>
              <MainLink>Вакансии</MainLink>
              <MainLink>Помощь</MainLink>
              <MainLink>Правила</MainLink>
              <MainLink>White Label Авиабилеты</MainLink>
            </Links>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="row start-xs">
          <SocialLink>
            <SocialIcon src={vk} alt="" />
            Вконтакте
          </SocialLink>
          <SocialLink>
            <SocialIcon src={fb} alt="" />
            Фейсбук
          </SocialLink>
          <SocialLink>
            <SocialIcon src={instagram} alt="" />
            Инстаграм
          </SocialLink>
          <SocialLink>
            <SocialIcon src={twitter} alt="" />
            Твиттер
          </SocialLink>
          <SocialLink>
            <SocialIcon src={viber} alt="" />
            Вайбер
          </SocialLink>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <Note>Поиск и бронирование отелей</Note>
        </div>
      </div>
    </div>
    <div className="row center-xs">
      <div className="col-xs-4">
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
    </div>
    <div className="row center-xs">
      <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
    </div>
  </div>
);
