import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import styled from "styled-components";
import HomePostItem from "./HomePostItem";
import media from "../../libs/styles/media";

const Container = styled.div`
	width: 100%;
`;

const InnerContainer = styled.div`
	max-width: 860px;
	margin: auto;
	padding-top: 75px;

	${media.custom(1199)} {
		max-width: 928px;
		padding: 75px 34px 0;
	}

	${media.custom(1023)} {
		max-width: 928px;
		padding-top: 50px;
	}
`;

export default function HomeBody() {
	const data = useStaticQuery(graphql`
		query AllMdx {
			allMdx(sort: { frontmatter: { created_at: DESC } }) {
				edges {
					node {
						id
						frontmatter {
							created_at(formatString: "YY.MM.DD")
							description
							title
							thumbnail {
								childImageSharp {
									gatsbyImageData(width: 160)
								}
							}
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	useEffect(() => {
		console.log(data.allMdx);
	}, [data]);

	return (
		<Container>
			<InnerContainer>
				{(data.allMdx.edges as Array<any>).map((edge) => (
					<HomePostItem slug={edge.node.fields.slug} post={edge.node.frontmatter} />
				))}
			</InnerContainer>
		</Container>
	);
}
