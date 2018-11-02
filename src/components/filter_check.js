import React from "react";
import PropTypes from "prop-types";
import DownIcon from "../icons/DownIcon.png";
import { BoxTitle, ArrowIcon } from "../styles/components/check_list";
import { fonts, colors } from "../lib/theme";
import { ButtonGroup, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";

export default class CheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      cSelected: []
    };
    this.propTypes = {
      title: PropTypes.string.isRequired,
      filterList: PropTypes.arrayOf(PropTypes.obj).isRequired
    };
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  handleTitleClick = () => {
    this.setState({ listOpen: !this.state.listOpen });
  };

  onCheckboxBtnClick = selected => {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
    console.log(this.state.cSelected);
  };

  render() {
    const { title, filterList } = this.props;
    const { listOpen } = this.state;
    return (
      <div style={{ marginLeft: "30px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "25px"
          }}
        >
          <ButtonGroup vertical>
            {filterList.map(item => (
              <Button
                style={
                  this.state.cSelected.includes(item.key)
                    ? {
                        color: `${colors.darkBrown}`,
                        fontFamily: `${fonts.lato}, sans-serif`,
                        width: "250px",
                        marginLeft: "25px",
                        backgroundColor: `${colors.lightBrown}`
                      }
                    : {
                        color: `${colors.darkBrown}`,
                        fontFamily: `${fonts.lato}, sans-serif`,
                        width: "250px",
                        marginLeft: "25px",
                        backgroundColor: `${colors.lightBeige}`
                      }
                }
                onClick={() => this.onCheckboxBtnClick(item.key)}
              >
                {item.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
