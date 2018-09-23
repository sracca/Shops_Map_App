import React, { Component } from "react";
import PropTypes from "prop-types";
import DownIcon from "../icons/DownIcon.png";
import { BoxDiv, BoxTitle, ArrowIcon } from "../styles/components/check_list";
import { fonts, fontSizes, colors } from "../lib/theme";

const labelStyle = {
  fontFamily: `${fonts.lato}, sans-serif`,
  fontSize: `${fontSizes.regular}`,
  color: `${colors.darkBrown}`
};

const CheckBox = ({ name }) => (
  <BoxDiv style={{ display: "flex" }}>
    <input type="checkbox" id={name} />
    <label style={labelStyle} for={name}>
      {name}
    </label>
  </BoxDiv>
);

CheckBox.PropTypes = {
  name: PropTypes.string.isRequired
};

export default class CheckList extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    filterList: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  render() {
    const { image, title, filterList } = this.props;
    return (
      <div>
        <div style={{ display: "flex" }}>
          <BoxTitle>{title}</BoxTitle>
          <ArrowIcon src={DownIcon} />
        </div>
        <div>
          {filterList.map(checkName => (
            <CheckBox name={checkName} />
          ))}
        </div>
      </div>
    );
  }
}
