import React from "react";
import styled from "styled-components";
import { colors, fonts, fontSizes } from "../../lib/theme";

export const ArrowIcon = styled.img`
  padding-top: 15px;
  height: 40px;
  width: 40px;
`;

export const BoxTitle = styled.p`
  font-family: ${fonts.lato}, sans-serif;
  font-size: ${fontSizes.large};
  color: ${colors.brown};
  margin-right: 30px;
  margin-left: 20px;
`;
export const BoxDiv = styled.div`
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    padding-bottom: 20px;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 1px;
      width: 17px;
      height: 17px;
      border: 3px solid ${colors.darkBrown};
      background: ${colors.lightBeige};
      border-radius: 3px;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
    }
    &:after {
      content: "✔";
      position: absolute;
      top: 1px;
      left: 4px;
      font-size: 16px;
      color: ${colors.darkBrown};
      transition: all 0.2s;
    }
  }
  > input:not(:checked) + label {
    &:after {
      opacity: 0; 
      transform: scale(0); 
  }
  > input:disabled:not(:checked) + label {
    &:before {
      box-shadow: none;
      border-color: ${colors.darkBrown};
      background-color: ${colors.lightBeige};
    }
  }
  > input:checked + label {
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: ${colors.lightBeige};
  }
  > input:checked:focus + label,
  input:not(:checked):focus + label {
    &:before {
      border: 4px ${colors.darkBrown};
      background-color: ${colors.darkBrown};
    }
  }
`;
