import React from "react";
import styled from "styled-components";
import { colors, fonts, fontSizes } from "../../lib/theme";

export const applyButton = {
  color: `${colors.white}`,
  backgroundColor: `${colors.brown}`,
  width: "100px",
  marginRight: `50px`
};

export const cancelButton = {
  color: `${colors.darkBrown}`,
  backgroundColor: `${colors.lightBrown}`,
  width: "100px"
};

export const FilterButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  padding-left: 75px;
`;
