import styled from "styled-components";
import { ReactComponent as Title } from "../img/HP_wb--08.svg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BiPaperPlane } from "react-icons/bi";

const ContactMeList = styled.div`
  & > div {
    max-width: 100%;
    text-align: center;
  }
  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px 10px;

    & > input {
      // submit的樣式
      margin: 20px;
      font-size: 14px;
      border-radius: 32px;
      border-style: none;
      height: 40px;
      width: 100px;
      background-color: #fef4f5;
      font-weight: 550;
      color: #9e605b;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        box-shadow: 5px 3px 1px #9e605b;
        transform: translate(3px, 3px);
      }
    }

    & > div {
      font-size: 16px;
      padding: 10px;

      & > label {
        color: #9e605b;
        font-weight: 550;
      }
      & > input {
        border-radius: 5px;
        width: 238px;
        height: 30px;
        box-shadow: 1px 1px 3px #826541;
        border-style: none;
        background-color: #fef4f5;
        color: #9e605b;
        margin-top: 5px;
        padding: 2px 5px;
      }
      & > textarea {
        border-radius: 5px;
        width: 238px;
        height: 70px;
        box-shadow: 1px 1px 3px #826541;
        border-style: none;
        background-color: #fef4f5;
        color: #9e605b;
        margin-top: 5px;
        padding: 2px 5px;
      }
      & > select {
        border-radius: 5px;
        width: 238px;
        height: 25px;
        box-shadow: 1px 1px 3px #826541;
        border-style: none;
        background-color: #fef4f5;
        color: #9e605b;
        margin-top: 5px;
      }
    }
  }

  @media screen and (min-width: 767px) {
    & > form {
      & > div {
        font-size: 18px;
      }
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

const JoinUs = styled.a`
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

const ContactOne = styled.div`
  & > div {
    padding: 10px;

    &:nth-child(1) {
      padding: 20px;
      color: #827668;
      font-size: 20px;
      font-weight: 550;
    }

    &:nth-child(2) {
      padding-top: 20px;
    }

    &:nth-child(3) {
      color: #9e605b;
      font-size: 16px;
      font-weight: 550;
      padding-bottom: 30px;
    }
  }
  @media screen and (min-width: 767px) {
    & > div {
      &:nth-child(1) {
        font-size: 24px;
      }
    }
  }
`;

const ContactTwo = styled.div`
  padding: 20px;
  color: #827668;
  font-size: 20px;
  font-weight: 550;
  @media screen and (min-width: 767px) {
    font-size: 24px;
  }
`;

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_au8fc36",
        "template_k223t0p",
        form.current,
        "TrVF1I4qvLOwn3k8M"
      )
      .then(
        (result) => {
          e.target.reset();
          alert("您的訊息已送出!");
        },
        (error) => {
          console.log(error.text);
          alert("發生錯誤!");
        }
      );
  };

  return (
    <ContactMeList>
      <Svg>
        <Title />
        <div>聯絡呂緋</div>
      </Svg>
      <ContactOne>
        <div>
          國文諮詢請點選加入課堂
          <BiPaperPlane />
        </div>
        <JoinUs
          href="https://docs.google.com/forms/d/e/1FAIpQLSfc3PX19K9NT46GUkZSC-mez949krA2USeKFa4RPzYUjCGq3Q/viewform"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div>加入課堂➤</div>
        </JoinUs>
        <div>填寫表單讓我更知道如何望聞問切，切中你的國文要害!</div>
      </ContactOne>
      <ContactTwo>
        <div>
          合作洽詢請填寫送出
          <BiPaperPlane />
        </div>
      </ContactTwo>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>稱呼</label>
          <br />
          <input type="text" name="user_name" />
        </div>
        <div>
          <label>Email</label> <br />
          <input type="email" name="user_email" />
        </div>
        <div>
          <label>合作項目</label> <br />
          <select name="message">
            <option>活動邀請(出席活動、課程教學...)</option>
            <option>行銷設計(品牌宣傳、商品介紹...)</option>
            <option>專業合作(書籍出版、文章邀稿...)</option>
            <option>業配宣傳(商品推薦、試用心得...)</option>
            <option>其他</option>
          </select>
        </div>
        <div>
          <label>簡述需求</label> <br />
          <textarea name="message1" />
        </div>
        <input type="submit" value="送出➤" />
      </form>
    </ContactMeList>
  );
}

export default ContactMe;
