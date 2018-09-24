import React, { Component } from "react";
import PropTypes from "prop-types";
import DownIcon from "../icons/DownIcon.png";
import { BoxDiv, BoxTitle, ArrowIcon } from "../styles/components/check_list";
import { fonts, fontSizes, colors } from "../lib/theme";
import Select from "react-select";

export default class CheckList extends React.Component {
  state = {
    listOpen: false
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    filterList: PropTypes.arrayOf(PropTypes.obj).isRequired,
    multiOptions: PropTypes.bool.isRequired
  };

  handleTitleClick = () => {
    this.setState({ listOpen: !this.state.listOpen });
  };

  render() {
    const { title, filterList, multiOptions } = this.props;
    const { listOpen } = this.state;
    return (
      <div style={{ marginLeft: "30px" }}>
        <div
          style={{
            display: "flex",
            borderBottom: `1px solid ${colors.brown}`,
            width: "300px"
          }}
          onClick={this.handleTitleClick}
        >
          <BoxTitle>{title}</BoxTitle>
          <ArrowIcon src={DownIcon} style={{ right: "0px" }} />
        </div>
        <div
          style={
            listOpen
              ? { display: "block", paddingTop: "25px" }
              : { display: "none", paddingTop: "25px" }
          }
        >
          <Select options={filterList} isMulti={multiOptions} />
        </div>
      </div>
    );
  }
}
