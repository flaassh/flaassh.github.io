import React from "react";
import { IconType } from "react-icons";
import { Link } from "gatsby";
import styled from "styled-components";
import palette from "../../libs/styles/palette";

const Container = styled(Link)`
	width: 33.33%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 6px 0 3px;
	cursor: pointer;

	color: ${palette.gray[6]};
	span {
		padding-top: 4px;
		font-size: 12px;
	}
`;

interface Props {
	to: string;
	text: string;
	Icon: IconType;
}

export default function BottomTabItem({ to, text, Icon }: Props) {
	return (
		<Container to={to}>
			<Icon style={{ width: 30, height: 30 }} />
			<span>{text}</span>
		</Container>
	);
}
