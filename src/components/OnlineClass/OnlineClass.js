import styled from "styled-components";
import { ReactComponent as Title } from "../img/HP_wb--08.svg";
import YoutubeApi from "../../YoutubeApi.json";

const OnlineClassList = styled.div`
  & > div {
    max-width: 100%;
    text-align: center;
  }
`;

const Svg = styled.div`
position:relative;
text-shadow: 2px 1px 2px #DB8FA2;
color:#C2857E;
font-weight:550;
font-size:14px;

&>div{
  position:absolute;
  top:50%;
 left:50%;
transform: translate(-50%, -50%);
letter-spacing:3px;
}
 &>svg{
  width:360px;
  height:55px;
 }

 @media screen and (min-width: 767px){
  font-size:24px;
  &>div{
    letter-spacing:6px;
  }
  &>svg{
    width:720px;
    height:110px;
  }
 }
  }
`;

const Youtube = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    text-align: center;
    padding: 10px;
    font-size: 16px;
    color: #9e605b;
    font-weight: 550;
    & > iframe {
      margin: 10px 10px;
      width: 112;
      height: 63;
    }
  }

  @media screen and (min-width: 767px) {
    & > div {
      font-size: 20px;
      & > iframe {
        width: 560px;
        height: 315px;
      }
    }
  }
`;

const JoinUs = styled.a`
  margin: 30px;
  & > div {
    height: 40px;
    width: 100px;
    line-height: 40px;
    text-align: center;
    background-color: #fef4f5;
    border-radius: 32px;
    font-size: 14px;
    letter-spacing: 2px;
    font-weight: 550;
    color: #9e605b;
    margin: auto;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      box-shadow: 5px 3px 1px #9e605b;
      transform: translate(3px, 3px);
    }
  }
`;

function OnlineClass() {
  return (
    <div>
      <OnlineClassList>
        <Svg>
          <Title />
          <div>線上影音</div>
        </Svg>
      </OnlineClassList>
      <Youtube>
        {YoutubeApi.map((youtube) => (
          <div>
            <iframe
              src={youtube.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <h2>{youtube.title}</h2>
          </div>
        ))}
      </Youtube>
      <JoinUs
        href="https://www.youtube.com/@user-cn6ii3fi6n/videos"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div>觀看更多➤</div>
      </JoinUs>
    </div>
  );
}

export default OnlineClass;
