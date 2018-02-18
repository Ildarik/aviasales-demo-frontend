import React from "react";
import styled from "styled-components";
import aeroflot from "./aeroflot.png";
import s7 from "./s7.png";
import onetwotrip from "./onetwotrip.png";
import koreanair from "./koreanair.png";
import elal from "./elal.png";

const AgencyLogo = styled.img``;

const Wrapper = styled.div`
  margin: 50px;
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 500;
  color: #5c5c5c;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

function Agency(props) {
  return <AgencyLogo src={props.logo} />;
}

export default () => (
  <Wrapper>
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-12">
          <Heading>
            Дешевые авиабилеты от крупнейших авиакомпаний и агентств
          </Heading>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-10">
          <Agency logo={aeroflot} />
          <Agency logo={s7} />
          <Agency logo={onetwotrip} />
          <Agency logo={koreanair} />
          <Agency logo={elal} />
        </div>
      </div>
    </div>
  </Wrapper>
);
