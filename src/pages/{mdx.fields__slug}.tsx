import React from "react";
import styled from "styled-components";
import { PageProps, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "@mdx-js/react/lib";
import CommonPageContainer from "../components/common/CommonPageContainer";
import CommonHeader from "../components/header/CommonHeader";
import palette from "../libs/styles/palette";
import media from "../libs/styles/media";
import Utterances from "../components/common/Utterances";
import CodeBlock from "../components/common/CodeBlock";

const BodyContainer = styled.div`
	width: 100%;
`;

const ContentContainer = styled.div`
	width: 100%;
	max-width: 860px;
	margin: auto;
	padding-top: 78px;
	margin-bottom: 40px;

	${media.custom(1199)} {
		max-width: 928px;
		padding: 78px 34px 0;
	}

	${media.custom(767)} {
		padding: 78px 20px 0;
	}
`;

const CategoryLabel = styled.span`
	color: black;
	font-size: 0.875em;
	font-weight: 600;
	margin-bottom: 8px;
`;

const TitleLabel = styled.h1`
	font-size: 1.5em;
	font-weight: 400;
	color: ${palette.viloet[6]};
	margin-bottom: 10px;
`;

const MdxContainer = styled.div`
	width: 100%;

	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: 400;
	}

	.h2-div {
		margin: 29px 0 22px;
		padding-left: 10px;
		padding-bottom: 2px;
		border-left: 5px solid ${palette.viloet[6]};
		border-top-left-radius: 2px;
		border-bottom-left-radius: 2px;
	}

	h2 {
		font-size: 1.5em;

		${media.custom(767)} {
			font-size: 1.25em;
		}

		.anchor {
			left: -15px;
		}
	}

	.anchor {
		svg {
			width: 20px;
			height: 20px;
			fill: ${palette.viloet[6]};
		}
	}

	h3 {
		margin: 22px 0 15px;
	}

	h6 {
		color: ${palette.gray[5]};
	}

	a:not(.anchor) {
		color: ${palette.viloet[5]};

		&:hover {
			color: ${palette.viloet[7]};
			font-weight: 500;
			font-size: 1.05em;
			transition: 0.5s;
		}
	}

	p {
		font-size: 1em;
		margin-bottom: 22px;
		line-height: 1.6;
	}

	hr {
		background-color: ${palette.gray[2]};
		height: 1px;
		border: 0;
		margin: 20px 0 40px;
	}

	.gatsby-resp-image-wrapper {
		margin-bottom: 20px;
	}

	li {
		font-size: 1em;
		margin-bottom: 6px;
	}

	pre {
		margin: 0;
	}
`;

const FooterContainer = styled.div`
	width: 100%;
`;

const components: MDXComponents = {
	h2: (props) => (
		<div className="h2-div">
			<h2 {...props} />
		</div>
	),
	code: CodeBlock,
};

export default function PostTemplate({ data, children }: PageProps<any>) {
	return (
		<CommonPageContainer>
			<CommonHeader />
			<BodyContainer>
				<ContentContainer>
					{data.mdx.frontmatter.category !== undefined && (
						<CategoryLabel>{data.mdx.frontmatter.category}</CategoryLabel>
					)}
					<TitleLabel>{data.mdx.frontmatter.title}</TitleLabel>
					<MdxContainer>
						<MDXProvider components={components}>{children}</MDXProvider>
					</MdxContainer>
				</ContentContainer>
			</BodyContainer>
			<FooterContainer>
				<Utterances />
			</FooterContainer>
		</CommonPageContainer>
	);
}

export const pageQuery = graphql`
	query Mdx($fields__slug: String!) {
		mdx(fields: { slug: { eq: $fields__slug } }) {
			frontmatter {
				title
				created_at(formatString: "YYYY-MM-DD HH:mm")
			}
		}
	}
`;
