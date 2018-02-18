import React from "react";
import styled from "styled-components";
import vk from "./vk.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import rss from "./rss.svg";
import border from "./border.png";

const Wrapper = styled.div`
  background: white;
  position: relative;
  margin: 50px;
  display: None;

  &:after {
    content: "";
    display: block;
    background: url(${border}) repeat-x;
    height: 9px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

const Heading = styled.h2`
  color: #5c5c5c;
  font-size: 16px;
  font-weight: bold;
  margin-top: 40px;
`;

const Paragraph = styled.p`
  color: #5c5c5c;
  font-size: 16px;
  font-weight: normal;
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 1200px) {
    margin: 0;
  }
`;

const Link = styled.img``;

const SubscribeWrapper = styled.div`
  position: relative;
  border: 1px solid #a0b0b9;
  border-radius: 2px;
  display: flex;
  margin: 10px;
`;

const Email = styled.input`
  line-height: 20px;
  font-size: 16px;
  background: #fff;
  color: #a0b0b9;
  border: none;
  width: 100%;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0;
  background: #ff8e41;
  border-radius: 2px;
  border: 0;
  line-height: 20px;
  font-size: 16px;
  color: white;
`;

export default () => (
  <Wrapper>
    <div className="container">
      <div className="row center-xs">
        <div className="col-xl-10 col-xl-offset-1 col-md-6">
          <div className="row start-xl">
            <div className="col-xl-5">
              <Heading>Хотите знать всё о скидках на авиабилеты?</Heading>
              <Paragraph>
                Вы можете подписаться на нашу рассылку через соцсети или по
                электронной почте.
              </Paragraph>
            </div>
            <div className="row top-lg">
              <div className="col-xl-5 col-md-offset-3" />
              <ActionsWrapper>
                <SocialLinks>
                  <Link src={vk} alt={vk} />
                  <Link src={facebook} alt={facebook} />
                  <Link src={twitter} alt={twitter} />
                  <Link src={rss} alt={rss} />
                </SocialLinks>
                <SubscribeWrapper>
                  <Email placeholder="Ваш email" />
                  <Button>Подписаться</Button>
                </SubscribeWrapper>
              </ActionsWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);
