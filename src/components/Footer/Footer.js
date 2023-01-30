import styled from "styled-components";
import { ResetStyle, GlobalStyle } from "../globalStyle";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaLine,
} from "react-icons/fa";
import { SiApplepodcasts } from "react-icons/si";

const FooterList = styled.div`
  background-color: #f1eaea;
  text-align: center;
  & > div {
    & > h3 {
      font-size: 24px;
      font-weight: 700;
      padding: 20px 0px 15px 0px;
      color: #9e605b;
    }
  }
  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-around;
    text-align: left;
    & > div {
      & > h3 {
        padding: 20px 10px 15px 0px;
      }
    }
  }
`;

const About = styled.div`
  & > a {
    display: block;
    font-size: 18px;
    font-weight: 500;
    color: #876d5a;
    padding: 5px;
    &:hover,
    active {
      color: #d1a290;
    }
  }

  @media screen and (min-width: 767px) {
    & > a {
      &:nth-child(5) {
        margin-bottom: 10px;
      }
    }
  }
`;

const Contact = styled.div`
  & > a {
    display: block;
    font-size: 18px;
    font-weight: 500;
    color: #876d5a;
    padding: 5px;
    &:hover,
    active {
      color: #d1a290;
    }
  }
`;

const Icon = styled.div`
  & > a {
    & > svg {
      font-size: 26px;
      margin: 5px 5px 15px 5px;
      cursor: pointer;
      color: #804949;
      &:hover,
      active {
        color: #d1a290;
      }
      @media screen and (min-width: 767px) {
        font-size: 20px;
        margin: 3px;
      }
    }
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  color: #fff;
  text-align: center;
  background-color: #9e605b;
  padding: 3px 0px;
`;

const AboutFei = styled(Link)``;
const ClassFeature = styled(Link)``;
const OnlineClass = styled(Link)``;
const Blog = styled(Link)``;
const ContactMe = styled(Link)``;

function Footer() {
  const { pathname } = useLocation();

  return (
    <>
      <FooterList>
        <ResetStyle />
        <GlobalStyle />
        <About>
          <h3>About Us</h3>
          <AboutFei to="/AboutFei" $active={pathname === "/AboutFei"}>
            關於呂緋
          </AboutFei>
          <ClassFeature
            to="/ClassFeature"
            $active={pathname === "/ClassFeature"}
          >
            課堂特色
          </ClassFeature>
          <OnlineClass to="/OnlineClass" $active={pathname === "/OnlineClass"}>
            線上影音
          </OnlineClass>
          <Blog to="/Blog" $active={pathname === "/Blog"}>
            Blog
          </Blog>
        </About>
        <Contact>
          <h3>Contact Us</h3>
          <a href="mailto:murmurfei@gmail.com">murmurfei@gmail.com</a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfc3PX19K9NT46GUkZSC-mez949krA2USeKFa4RPzYUjCGq3Q/viewform"
            target="_blank"
            rel="noreferrer noopener"
          >
            國文諮詢
          </a>
          <ContactMe to="/ContactMe" $active={pathname === "/ContactMe"}>
            合作洽詢
          </ContactMe>
        </Contact>
        <div>
          <h3>Follow Us</h3>
          <Icon>
            <a
              href="https://www.facebook.com/murmurfei"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/murmurfei/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCPiLwC4PY_7uQwp_mkhzGlQ"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaYoutube />
            </a>
            <a
              href="https://open.spotify.com/show/5vefMq6tUOQjxiZ6gRA9EZ?si=AaAfhevnR5iGeQ-bJr-RTw&nd=1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaSpotify />
            </a>

            <a
              href="https://podcasts.apple.com/tw/podcast/%E5%9A%BC%E5%9C%8B%E6%96%87/id1537749843?i=1000555744874"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiApplepodcasts />
            </a>
            <a
              href="https://line.me/R/ti/p/@wsu5009x"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLine />
            </a>
          </Icon>
        </div>
      </FooterList>
      <Copyright>
        <div>
          Copyright © 2022 呂緋國文. All rights reserved. Design By ChuanYen
        </div>
      </Copyright>
    </>
  );
}

export default Footer;
