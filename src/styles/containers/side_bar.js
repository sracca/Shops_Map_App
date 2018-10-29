import React from "react";
import styled from "styled-components";
import { colors } from "../../lib/theme";

export const SidebarDiv = styled.div`
  width: 80px;
  height: 100%
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 10;
<<<<<<< HEAD
=======
  margin-top: -1rem;
  padding-top: 1.5rem;
>>>>>>> 664a5dc5f7c1f43544e667119e997d1e165c83a7
  right: 0px;
  background-color: ${colors.darkBrown};
  justify-content: center;
  text-align: center;
`;

export const IconContainer = styled.div`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-color: ${colors.lightBeige};
  display: inline-block;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SidebarIcon = styled.img`
  margin: 0 auto;
  height: 50px;
  width: 50px;
`;
