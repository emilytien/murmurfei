import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  text-align: center;
  margin: 50px 0px;
  & > div {
    &:nth-child(1) {
      font-size: 28px;
      padding: 15px 0px;
    }
    &:nth-child(2) {
      font-size: 22px;
      padding: 15px 0px;
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 767px) {
    margin: 120px;
  }
`;

const BackHomepage = styled(Link)`
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

    &:hover {
      box-shadow: 5px 3px 1px #9e605b;
      transform: translate(3px, 3px);
    }
  }
`;

function NotFound() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });

  return (
    <Container>
      <div>Oops! You got wrong URL!</div>
      <div>
        哎呀! 我們還沒有這個頁面!
        <br />
        <br />
        5秒後將回到首頁
      </div>
      <BackHomepage to="/" $active={pathname === "/"}>
        <div>回到首頁</div>
      </BackHomepage>
    </Container>
  );
}

export default NotFound;
