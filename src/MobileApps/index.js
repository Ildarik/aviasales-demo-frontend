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
`;

const Stars = styled.p`
  color: #fff;
  display: flex;
  justify-content: center;
`;

const Rating = styled.img`
  margin-right: 10px;
`;

const MobileTypeIcon = styled.img`
  margin: 10px;
  display: inline;
`;

const MobileTypeName = styled.div`
  color: #fff;
  font-size: 14px;
  align-self: center;
  margin-top: 3px;
  width: 50px;
`;

const MobileTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const PhoneWrapper = styled.div`
  position: relative;
`;

const ItemWrapper = styled.div`
  display: flex;
`;

const Iphone = styled.img`
  display: block;
  position: absolute;
  width: 132px;
  height: 143px;
  bottom: 0;
  left: 0;

  @media (min-width: 768px) {
    width: 160px;
    height: 208px;
  }

  @media (min-width: 1200px) {
    width: 140px;
    height: 180px;
  }
`;

function MobileType(props) {
  return (
    <div>
      <ItemWrapper>
        <MobileTypeIcon src={props.icon} />
        <MobileTypeName>{props.name}</MobileTypeName>
      </ItemWrapper>
    </div>
  );
}

export default () => (
  <Wrapper>
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-12 col-md-8">
          <Heading>Скачай мобильное приложение Aviasales.ru</Heading>
          <Stars>
            <Rating src={rating} alt="" />
            <div>Более 103 000 оценок</div>
          </Stars>
        </div>
      </div>

      <div className="row">
        <PhoneWrapper>
          <Iphone src={mobile} alt="Mobile phone" />
        </PhoneWrapper>
        <div className="col-xs-6 col-md-8 col-xs-offset-6 col-md-offset-4">
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
