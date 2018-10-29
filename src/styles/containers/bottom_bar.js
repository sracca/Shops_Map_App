import React from "react";
import styled from "styled-components";
import { colors, fonts, fontSizes } from "../../lib/theme";

export const AboutText = styled.p`
  color: ${colors.lightBeige};
  font-family: ${fonts.arvo}, serif;
  font-size: ${fontSizes.regular};
  padding-right: 20px;
`;

export const BottomNavContainer = styled.div`
  background-color: ${colors.lightBrown};
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  width: 100%;
<<<<<<< HEAD
  height: 50px;
=======
  height: 44px;
>>>>>>> 664a5dc5f7c1f43544e667119e997d1e165c83a7
  margin: 0 -999rem;
  padding: 0.25rem 999rem;
`;
