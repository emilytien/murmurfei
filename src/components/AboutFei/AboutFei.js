import styled from "styled-components";
import { ReactComponent as Title } from "../img/HP_wb--08.svg";
import about from "../img/about-F.png";
import { FcGraduationCap, FcList } from "react-icons/fc";

const AboutFeiList = styled.div`
  & > div {
    max-width: 100%;
    text-align: center;
    & > img {
      padding: 30px 15px;
      max-width: 80%;
    }
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

const Word = styled.div`
  padding: 10px;
  & > div {
    font-size: 18px;
    text-align: center;
    line-height: 1.3;
    color: #827668;
    font-weight: 550;
  }

  @media screen and (min-width: 767px) {
    & > div {
      font-size: 22px;
      line-height: 1.5;
    }
  }
`;

const JoinUs = styled.a`
  margin: 10px;
  & > div {
    height: 40px;
    width: 100px;
    line-height: 40px;
    background-color: #fef4f5;
    border-radius: 32px;
    font-size: 14px;
    letter-spacing: 2px;
    font-weight: 550;
    color: #9e605b;
    margin: auto;
    cursor: pointer;
    transition: 0.3s;
    text-align: center;
    &:hover {
      box-shadow: 5px 3px 1px #9e605b;
      transform: translate(3px, 3px);
    }
  }
`;

const PersonalImf = styled.div`
  padding: 10px;
  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;

const Imf = styled.div`
  padding: 10px;
  margin: 20px 45px;
  border: 1px solid #9c6868;
  border-radius: 12px;
  background-color: #fff7f7;
  & > h1 {
    font-size: 24px;
    font-weight: 550;
    padding-bottom: 10px;
  }
  & > div {
    font-size: 16px;
    color: #827668;
    font-weight: 550;
    padding: 5px;
  }

  @media screen and (min-width: 767px) {
    margin: 20px 15px;
    border: none;
    box-shadow: 1px 1px 1px #9c6868;
    & > h1 {
      font-size: 26px;
    }
    & > div {
      font-size: 20px;
    }
  }
`;

function AboutFei() {
  return (
    <AboutFeiList>
      <Svg>
        <Title />
        <div>關於呂緋</div>
      </Svg>

      <div>
        <img src={about} alt="" />
      </div>

      <PersonalImf>
        <Imf>
          <h1>
            學歷
            <FcGraduationCap />
          </h1>
          <div>台北市立大學 中國語文學系</div>
          <div>臺灣師範大學 課程與教學研究所</div>
          <div>國小、國中、高中教師證</div>
        </Imf>
        <Imf>
          <h1>
            經歷
            <FcList />
          </h1>
          <div>學習王線上教學國文科教師</div>
          <div>好師到線上直播國文教師</div>
          <div>康軒學習網國文科教師</div>
          <div>麻辣複習講義解題老師</div>
          <div>大台北各大升學補習班特聘教師</div>
        </Imf>
      </PersonalImf>

      <Word>
        <div>
          嗨 我是呂緋老師<br></br>國文教學 | 線上教學 | 補教 | 出版<br></br>分享
          #國文筆記 #筆記 #讀書 #考試 <br></br>偶爾寫寫#課堂日常<br></br>
          立志打造有效也有笑的課堂
        </div>
      </Word>
      <JoinUs
        href="https://docs.google.com/forms/d/e/1FAIpQLSfc3PX19K9NT46GUkZSC-mez949krA2USeKFa4RPzYUjCGq3Q/viewform"
        target="_blank"
      >
        <div>加入課堂➤</div>
      </JoinUs>
    </AboutFeiList>
  );
}

export default AboutFei;
