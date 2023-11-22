import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
`;

const InnerContainer = styled.div`
	width: 100%;
	max-width: 1200px;
	height: 80px;
	margin: auto;
	display: flex;
	justify-content: center;
`;

export default function Header() {
	return (
		<Container>
			<InnerContainer />
		</Container>
	);
}
