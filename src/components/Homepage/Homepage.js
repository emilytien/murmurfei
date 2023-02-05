import { ResetStyle, GlobalStyle } from "../globalStyle";
import styled from "styled-components";
import banner1 from "../img/Homepage_wbFF-05.png";
import banner2 from "../img/Homepage_pics-03-1.jpg";
import schedule from "../img/schedule--wb.png";
import ytPicLarge from "../img/ytPicLarge.jpg";
import ytPicSmall from "../img/ytPicSmall.png";
import podcPicLarge from "../img/podcPicLarge.jpg";
import podcPicSmall from "../img/podcPicSmall.png";

const Section = styled.div`
  & > div {
    & > img {
      padding: 15px 15px;
      max-width: 100%;
    }
  }
`;

const Banner = styled.div`
  & > img {
    background-color: #c2b19c;
  }
`;

const Second = styled.div`
  margin: 10px;
  text-align: center;

  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    & > div {
      text-align: right;
    }
  }
`;

const SecondImg = styled.div`
  & > img {
    max-width: 40%;
  }

  @media screen and (min-width: 1200px) {
    width: 30%;
    & > img {
      max-width: none;
      width: 450px;
    }
  }
`;

const SecondWord = styled.div`
  & > p {
    font-size: 22px;
    line-height: 1.5;
    padding: 10px;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 130px;
    padding-left: 30px;
    & > p {
      font-size: 24px;
      line-height: 2;
      text-align: left;
    }
  }
`;

const Point = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  & > div {
    font-size: 22px;
    color: #5b8766;
    font-weight: 550;
    padding-left: 5px;
  }

  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
    & > div {
      font-size: 24px;
    }
  }
`;

const Circle = styled.div`
  height: 20px;
  width: 20px;
  background-color: #6ea37c;
  border-radius: 100px;
  position: relative;
  & > div {
    height: 2px;
    background-color: white;
    position: absolute;
    top: 14px;
    left: 8px;
    transform-origin: 0 0;
    &:nth-child(1) {
      width: 5px;
      transform: rotate(-140deg);
    }
    &:nth-child(2) {
      width: 10px;
      transform: rotate(-50deg);
    }
  }
`;

const ToYoutube = styled.a`
  & > .ytPicLarge {
    display: none;
  }
  & > .ytPicSmall {
    display: block;
    padding: 20px;
  }
  & > img {
    max-width: 100%;
  }

  @media screen and (min-width: 767px) {
    & > .ytPicSmall {
      display: none;
    }
    & > .ytPicLarge {
      display: block;
      padding: 20px;
    }
  }
`;

const ToPodcast = styled.a`
  & > .podcPicLarge {
    display: none;
  }
  & > .podcPicSmall {
    display: block;
    padding: 20px;
  }
  & > img {
    max-width: 100%;
  }

  @media screen and (min-width: 767px) {
    & > .podcPicSmall {
      display: none;
    }
    & > .podcPicLarge {
      display: block;
      padding: 20px;
    }
  }
`;

function Homepage() {
  return (
    <Section>
      <ResetStyle />
      <GlobalStyle />
      <Banner>
        <img src={banner1} alt="" />
      </Banner>
      <Second>
        <SecondImg>
          <img src={banner2} alt="" />
        </SecondImg>
        <SecondWord>
          <p>
            熱愛教學、喜歡每次站在講台時因著學生的不同，
            <br />
            而有各種想像及碰撞，對有關教學的事務懷抱著熱情與執著。
            <br />
            陪學生走上一段求學路程，
            <br />
            讓他們對國文有更多興趣為我所欲也!
          </p>
          <Point>
            <Circle>
              <div></div>
              <div></div>
            </Circle>
            <div>知名補習班國文老師</div>
          </Point>
          <Point>
            <Circle>
              <div></div>
              <div></div>
            </Circle>
            <div>私中特訓/國高中國文教學/閱讀寫作/口語表達</div>
          </Point>
          <Point>
            <Circle>
              <div></div>
              <div></div>
            </Circle>
            <div>因材施教，拓展線上國文教學</div>
          </Point>
        </SecondWord>
      </Second>
      <ToYoutube
        href="https://www.youtube.com/@user-cn6ii3fi6n/videos"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={ytPicLarge} alt="" className="ytPicLarge" />
        <img src={ytPicSmall} alt="" className="ytPicSmall" />
      </ToYoutube>
      <ToPodcast
        href="https://open.spotify.com/show/5vefMq6tUOQjxiZ6gRA9EZ?si=AaAfhevnR5iGeQ-bJr-RTw&nd=1"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={podcPicLarge} alt="" className="podcPicLarge" />
        <img src={podcPicSmall} alt="" className="podcPicSmall" />
      </ToPodcast>
      <div>
        <img src={schedule} alt="" />
      </div>
    </Section>
  );
}

export default Homepage;
