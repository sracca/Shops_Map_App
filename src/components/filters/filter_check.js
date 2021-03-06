import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../lib/theme";
import { ButtonGroup, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  GroupContainer,
  unselected,
  selected,
  expansionStyles,
  titleExpansion
} from "../../styles/components/filter_components";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class CheckList extends React.Component {
  state = {
    cSelected: []
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    filterList: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    ).isRequired
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

  onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);

  render() {
    const { title, filterList } = this.props;
    return (
      <ExpansionPanel style={expansionStyles}>
        <ExpansionPanelSummary
          style={titleExpansion}
          expandIcon={
            <ExpandMoreIcon
              style={{
                color: `${colors.darkBrown}`
              }}
            />
          }
        >
          {title}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <GroupContainer>
            <ButtonGroup vertical>
              {filterList.map(item => (
                <Button
                  key={item.key}
                  style={
                    this.state.cSelected.includes(item.key)
                      ? selected
                      : unselected
                  }
                  onClick={() => this.onCheckboxBtnClick(item.key)}
                >
                  {item.label}
                </Button>
              ))}
            </ButtonGroup>
          </GroupContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
