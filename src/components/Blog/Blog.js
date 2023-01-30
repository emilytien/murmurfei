import styled from "styled-components";
import { ReactComponent as Title } from "../img/HP_wb--08.svg";
import BlogPost from "../../BlogPost.json";
import { useState, useEffect } from "react";
import pic from "../img/教師節特輯-1.jpg";

const BlogList = styled.div`
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

// function Post({ post }) {
//   return (
//     <div>
//       <div>{post.Title}</div>
//       <img src={post.img1} alt="" />
//     </div>
//   );
// }

function Blog() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   BlogPost()((posts) => setPosts(posts));
  // });

  return (
    <BlogList>
      <Svg>
        <Title />
        <div>BLOG</div>
      </Svg>
      {/* <div>
        {posts.map((post) => {
          <Post post={post}></Post>;
        })}
      </div> */}
      <div>
        {BlogPost.map((post) => {
          return (
            <div key={post.id}>
              <div>{post.Title}</div>
              <img src={post.img1} alt="" />
              <div>{post.concent}</div>
            </div>
          );
        })}
      </div>
      <img src={pic} alt="" />
    </BlogList>
  );
}

export default Blog;
