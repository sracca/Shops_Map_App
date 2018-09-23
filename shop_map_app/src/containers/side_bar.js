import React, { Component } from "react";
import {
  SidebarDiv,
  IconContainer,
  SidebarIcon
} from "../styles/containers/side_bar";
import FilterIcon from "../icons/FilterIcon.png";
import ListIcon from "../icons/ListIcon.png";

export default class Sidebar extends React.Component {
  render() {
    return (
      <SidebarDiv>
        <IconContainer>
          <SidebarIcon src={FilterIcon} style={{ paddingTop: "5px" }} />
        </IconContainer>
        <IconContainer>
          <SidebarIcon src={ListIcon} style={{ paddingTop: "10px" }} />
        </IconContainer>
      </SidebarDiv>
    );
  }
}
