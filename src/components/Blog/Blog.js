import styled from "styled-components";
import { ReactComponent as Title } from "../img/HP_wb--08.svg";
import jsonData from "../../data/BlogPost";
import { Link } from "react-router-dom";

const BlogList = styled.div`
	& > div {
		max-width: 100%;
		text-align: center;
	}
`;

const Svg = styled.div`
	position: relative;
	text-shadow: 2px 1px 2px #db8fa2;
	color: #c2857e;
	font-weight: 550;
	font-size: 14px;

	& > div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		letter-spacing: 3px;
	}
	& > svg {
		width: 360px;
		height: 55px;
	}

	@media screen and (min-width: 767px) {
		font-size: 24px;
		& > div {
			letter-spacing: 6px;
		}
		& > svg {
			width: 720px;
			height: 110px;
		}
	}
`;

const List = styled.div`
	width: 95%;
	margin: auto;
	& > div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 5px 0px;
		margin: 25px 0px;
		border-bottom: 1.5px solid #d1a390;
	}
	@media screen and (min-width: 767px) {
		width: 60%;
		& > div {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}
`;

const PostTitle = styled(Link)`
	color: #9c6868;
	font-weight: 550;
	font-size: 24px;
	text-decoration: none;
`;

const Small = styled.div`
	color: #827668;
	display: flex;
	justify-content: flex-end;
	padding: 10px;
	@media screen and (min-width: 767px) {
		display: inline-block;
	}
`;
const Author = styled.div`
	font-size: 16px;
	padding-right: 15px;
	@media screen and (min-width: 767px) {
		padding-bottom: 5px;
	}
`;
const Date = styled.div`
	font-size: 14px;
`;

function Blog() {
	return (
		<BlogList>
			<Svg>
				<Title />
				<div>BLOG</div>
			</Svg>
			<List>
				{jsonData.map((post) => (
					<div key={post.id}>
						<PostTitle to={`/Blog/${post.id}`}>{post.Title}</PostTitle>
						<Small>
							<Author>By {post.author}</Author>
							<Date>{post.date}</Date>
						</Small>
					</div>
				))}
			</List>
		</BlogList>
	);
}

export default Blog;
