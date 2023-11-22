import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineShortcut } from "react-icons/md";
import styled from "styled-components";
import { mediaQuery } from "../../libs/styles/media";
import palette from "../../libs/styles/palette";
import BottomTabItem from "./BottomTabItem";

const Container = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: white;
	border-top: 1px solid ${palette.gray[2]};
	display: none;

	${mediaQuery(1024)} {
		display: flex;
	}
`;

export default function BottomTab() {
	return (
		<Container>
			<BottomTabItem to="" text="카테고리" Icon={BiCategoryAlt} />
			<BottomTabItem to="" text="홈" Icon={HiOutlineHome} />
			<BottomTabItem to="" text="바로가기" Icon={MdOutlineShortcut} />
		</Container>
	);
}
