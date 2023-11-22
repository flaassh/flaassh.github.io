import React from "react";
import { GatsbyBrowser } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import BottomTab from "./src/components/bottom-tab/BottomTab";
import Header from "./src/components/header/Header";

const GlobalStyle = createGlobalStyle`
	body {
		font-family: "Noto Sans KR";
		padding: 0;
		margin: 0;
        background: white;


		div {
			box-sizing: border-box;
		}
		-webkit-scrollbar {
  			display: none;
		}

	}

	a {
		text-decoration: none;
		color: black;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6, 
	p {
		margin: 0;
	}
`;
const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	overflow-y: auto;
`;

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
	return (
		<div>
			<GlobalStyle />
			<Header />
			<Container>{element}</Container>
			<BottomTab />
		</div>
	);
};
