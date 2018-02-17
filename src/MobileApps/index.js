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

const Heading = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const Stars = styled.p`
  color: #fff;
  display: flex;
  text-align: center;
`;

const Rating = styled.img`
  margin-left: 20px;
  margin-right: 10px;
`;

const MobileTypeIcon = styled.img`
  margin: 10px;
`;
const MobileTypeName = styled.div`
  color: #fff;
  font-size: 14px;
  align-self: center;
  margin-top: 3px;
`;

const MobileTypeWrapper = styled.div`
  margin-top: 30px;
  margin-left: 10px;
`;

function MobileType(props) {
  return (
    <div className="row">
      <MobileTypeIcon src={props.icon} />
      <MobileTypeName>{props.name}</MobileTypeName>
    </div>
  );
}

export default () => (
  <Wrapper>
    <div className="container">
      <div className="row">
        <Heading>Скачай мобильное приложение Aviasales.ru</Heading>
      </div>
      <Stars>
        <Rating src={rating} alt="" />
        <div>Более 103 000 оценок</div>
      </Stars>
      <div className="row">
        <div className="col-xs-6">
          <img src={mobile} alt="Mobile phone" />
        </div>
        <div className="col-xs-6">
          <MobileTypeWrapper>
            <MobileType icon={apple} name="iPhone или iPad" />
            <MobileType icon={android} name="Android" />
            <MobileType icon={wp} name="Windows Phone" />{" "}
          </MobileTypeWrapper>
        </div>
      </div>
    </div>
  </Wrapper>
);
