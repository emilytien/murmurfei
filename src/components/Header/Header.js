import styled from "styled-components";
import { ResetStyle, GlobalStyle } from "../globalStyle";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiChevronsUp } from "react-icons/fi";
import logo from "../img/LOGO.png";

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const HeaderContainer = styled.div`
  font-size: 20px;
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: #f1eaea;
  box-shadow: 0px 0px 5px #826541;
  position: relative;

  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 1s;
    font-size: ${({ fix }) => (fix ? "16px" : "18px")};
    height: ${({ fix }) => (fix ? "45px" : "70px")};
  }
`;

const Burger = styled.div`
  width: 30px;
  height: 30px;
  position: fixed;
  top: 18px;
  left: 15px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: nowrap;

  div {
    width: 30px;
    height: 3px;
    background-color: #c2b19c;
    border-radius: 10px;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media screen and (min-width: 767px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  & > img {
    padding-top: 10px;
    max-width: ${({ fix }) => (fix ? "130px" : "200px")};
    transition: 1s;
  }
  @media screen and (min-width: 767px) {
    padding-top: 0px;
    & > img {
      max-width: ${({ fix }) => (fix ? "130px" : "200px")};
      transition: 1s;
    }
  }
`;

const NavBar = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e2d2d2;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  & > a {
    text-decoration: none;
    font-weight: 550;
    display: flex;
    padding: 18px 15px;
    color: #876d5a;
  }

  @media screen and (min-width: 767px) {
    height: 100%;
    background-color: #f1eaea;
    display: flex;
    justify-content: flex-end;
    padding: ${({ fix }) => (fix ? "5px 10px" : "13px 15px")};
    transform: none;
    position: static;

    & > a {
      font-weight: 500;
      height: ${({ fix }) => (fix ? "30px" : "50px")};
      padding: ${({ fix }) => (fix ? "10px 10px" : "16px 15px")};
    }
  }
`;

const AboutFei = styled(Link)`
  @media screen and (min-width: 767px) {
    &:hover {
      height: ${({ fix }) => (fix ? "30px" : "50px")};
      background-color: #9e605b;
      color: #fef4f5;
      border-radius: 32px;
    }

    ${(props) =>
      props.$active &&
      `
      height: ${({ fix }) => (fix ? "30px" : "50px")};
      background-color: #E3CAC8;
      border-radius: 32px;`}
  }
`;

const ClassFeature = styled(Link)`
  @media screen and (min-width: 767px) {
    &:hover {
      height: ${({ fix }) => (fix ? "30px" : "50px")};
      background-color: #9e605b;
      color: #fef4f5;
      border-radius: 32px;
    }
    ${(props) =>
      props.$active &&
      `
      height: ${({ fix }) => (fix ? "30px" : "50px")};
      background-color: #E3CAC8;
      border-radius: 32px;`}
  }
`;

const OnlineClass = styled(Link)`
  @media screen and (min-width: 767px) {
    &:hover {
      height: ${({ fix }) => (fix ? "30px" : "50px")};
      background-color: #9e605b;
      color: #fef4f5;
      border-radius: 32px;
    }
    ${(props) =>
      props.$active &&
      `
      height: ${({ fix }) => (fix ? "30px" : "50px")};
      background-color: #E3CAC8;
      border-radius: 32px;`}
  }
`;

const Blog = styled(Link)`
  @media screen and (min-width: 767px) {
    &:hover {
      height: ${({ fix }) => (fix ? "30px" : "50px")};
      background-color: #9e605b;
      color: #fef4f5;
      border-radius: 32px;
    }
    ${(props) =>
      props.$active &&
      `
      height: ${({ fix }) => (fix ? "30px" : "50px")};
      background-color: #E3CAC8;
      border-radius: 32px;`}
  }
`;

const ContactMe = styled(Link)`
  @media screen and (min-width: 767px) {
    &:hover {
      height: ${({ fix }) => (fix ? "30px" : "50px")};
      background-color: #9e605b;
      color: #fef4f5;
      border-radius: 32px;
    }
    ${(props) =>
      props.$active &&
      `
      height: ${({ fix }) => (fix ? "30px" : "50px")};
      background-color: #E3CAC8;
      border-radius: 32px;`}
  }
`;

const BackToTop = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  box-shadow: 1px 1px 3px #827372;
  filter: opacity(50%);
  cursor: pointer;
  background-color: #ba716c;
  position: fixed;
  bottom: 20px;
  right: 20px;
  & > svg {
    font-size: 20px;
    margin: 10px 10px;
  }
`;

function Header() {
  const { pathname } = useLocation();

  // 開關漢堡
  const [open, setOpen] = useState(false);

  // 回到最上方
  const ToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 滑行位置
  const [fix, setFix] = useState(false);
  const setFixed = () => {
    if (window.scrollY >= 200) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", setFixed);

  return (
    <Container>
      <HeaderContainer fix={fix}>
        <ResetStyle />
        <GlobalStyle />
        <Burger open={open} onClick={() => setOpen(!open)} fix={fix}>
          <div />
          <div />
          <div />
        </Burger>
        <Logo
          to="/"
          $active={pathname === "/"}
          onClick={() => setOpen(false)}
          fix={fix}
        >
          <img src={logo} alt="LOGO" />
        </Logo>
        <NavBar open={open} fix={fix}>
          <AboutFei
            to="/AboutFei"
            $active={pathname === "/AboutFei"}
            onClick={() => setOpen(!open)}
            fix={fix}
          >
            關於呂緋
          </AboutFei>
          <ClassFeature
            to="/ClassFeature"
            $active={pathname === "/ClassFeature"}
            onClick={() => setOpen(!open)}
            fix={fix}
          >
            課堂特色
          </ClassFeature>
          <OnlineClass
            to="/OnlineClass"
            $active={pathname === "/OnlineClass"}
            onClick={() => setOpen(!open)}
            fix={fix}
          >
            線上影音
          </OnlineClass>
          <Blog
            to="/Blog"
            $active={pathname === "/Blog"}
            onClick={() => setOpen(!open)}
            fix={fix}
          >
            Blog
          </Blog>
          <ContactMe
            to="/ContactMe"
            $active={pathname === "/ContactMe"}
            onClick={() => setOpen(!open)}
            fix={fix}
          >
            聯絡呂緋
          </ContactMe>
        </NavBar>
      </HeaderContainer>
      <BackToTop type="button" onClick={ToTop}>
        <FiChevronsUp />
      </BackToTop>
    </Container>
  );
}

export default Header;
