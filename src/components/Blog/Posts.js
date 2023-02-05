import styled from "styled-components";
import jsonData from "../../BlogPost";
import { useParams } from "react-router-dom";

const Container = styled.div`
  & > div {
    width: 90%;
    margin: auto;
  }

  @media screen and (min-width: 767px) {
    & > div {
      width: 65%;
    }
  }
`;

const PostTitle = styled.div`
  font-size: 28px;
  margin: 25px 0px 20px 0px;
  text-align: center;
  color: #9c6868;
  font-weight: 550;
`;

const Small = styled.div`
  text-align: center;
  padding-bottom: 15px;
  color: #827668;
  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px 5px 10px 5px;
  }
`;

const Date = styled.div`
  padding-bottom: 3px;

  @media screen and (min-width: 767px) {
    padding-right: 10px;
    padding-bottom: 0px;
  }
`;

const Author = styled.div`
  font-size: 16px;
`;

const PostContent = styled.div`
  font-size: 20px;
  line-height: 1.5;
  padding: 0px 5px 30px 5px;
`;

function Posts() {
  const { id } = useParams();
  return (
    <Container>
      {jsonData
        .filter((post) => post.id == id)
        .map((post) => (
          <div key={post.id}>
            <PostTitle>{post.Title}</PostTitle>
            <Small>
              <Date>{post.date}</Date>
              <Author>By {post.author}</Author>
            </Small>
            <PostContent
              dangerouslySetInnerHTML={{
                __html: post.content.replace(/\\n/g, "<br />"),
              }}
            />
          </div>
        ))}
    </Container>
  );
}

export default Posts;
