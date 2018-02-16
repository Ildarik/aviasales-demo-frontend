import React from "react";
import styled from "styled-components";
import mobile from "./mobile.png";
import rating from "./rating.svg";
import apple from "./apple.svg";
import android from "./android.svg";
import wp from "./wp.svg";

const Wrapper = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
`;

export default () => (
  <Wrapper>
    <img src={mobile} alt="Mobile phone" />
    <div>
      <div>Скачай мобильное приложение Aviasales.ru</div>
      <div>
        <img src={rating} alt="" />
        Более 103 000 оценок
      </div>
      <ul>
        <li>
          <a>
            <img src={apple} alt="" /> iPhone или iPad
          </a>
        </li>
        <li>
          <a>
            <img src={android} alt="" /> Android
          </a>
        </li>
        <li>
          <a>
            <img src={wp} alt="" /> Windows Phone
          </a>
        </li>
      </ul>
    </div>
  </Wrapper>
);
