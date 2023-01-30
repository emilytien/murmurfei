import styled from "styled-components";
import { ReactComponent as Title } from "../img/HP_wb--08.svg";
import { useEffect, useState } from "react";

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

const API_KEY = "AIzaSyDV-mrTdd4B1-pRQkr1u5xyP5fYY6xMEl";
const ChannelID = "UCMUnInmOkrWN4gof9KlhNmQ";

var fetchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelID=${ChannelID}&maxResults=10&order=date&key=${API_KEY}`;

function OnlineClass() {
  const [allVideos, setAllVideos] = useState([]);
  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
          Videolink: "https://www.youtube.com/embed/" + doc.id.videoID,
        }));
        setAllVideos(result);
      });
  });
  console.log(allVideos);
  return (
    <div>
      <OnlineClassList>
        <Svg>
          <Title />
          <div>線上影音</div>
        </Svg>
      </OnlineClassList>
      <div>
        {allVideos.map((item) => {
          return (
            <div>
              <iframe
                width="560"
                height="315"
                src={item.Videolink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OnlineClass;
