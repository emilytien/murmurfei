import styled from "styled-components";
import { ReactComponent as Title } from "../img/HP_wb--08.svg";
import pic from "../img/HP_wb-07.jpg";

const ClassFeatureList = styled.div`
  & > div {
    max-width: 100%;
    text-align: center;
    & > img {
      padding: 0px 15px 20px 15px;
      max-width: 100%;
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

function ClassFeature() {
  return (
    <ClassFeatureList>
      <Svg>
        <Title />
        <div>課堂特色</div>
      </Svg>
      <div>
        <img src={pic} alt="" />
      </div>
    </ClassFeatureList>
  );
}

export default ClassFeature;
