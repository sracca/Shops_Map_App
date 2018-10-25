import React from "react";
import Sidebar from "./side_bar";
import { slide as Menu } from "react-burger-menu";
import CheckList from "../components/filter_check";
import { colors } from "../lib/theme";
import { econCode, ethnicity, corp, twoAns } from "../constants/filter_lists";
import TagList from "../components/filter_tag";
import { fullList } from "../constants/goods_lists.js";
const styles = {
  bmMenu: {
    background: `${colors.lightBeige}`,
    paddingTop: "20px"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

export default class SideMenu extends React.Component {
  state = {
    openMenu: false
  };

  clickedFilter = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  render() {
    const { openMenu } = this.state;
    return (
      <div>
        <Sidebar handleFilterClick={this.clickedFilter} />
        <Menu
          width={"400px"}
          right
          customBurgerIcon={false}
          isOpen={openMenu}
          styles={styles}
        >
          <CheckList
            style={{ paddingTop: "20px" }}
            title={"Economic Code"}
            filterList={econCode}
          />
          <TagList
            title={"Goods Sold"}
            filterList={fullList}
            multiOptions={true}
          />
          <CheckList title={"Ethnicity"} filterList={ethnicity} />
          <CheckList title={"Ownership"} filterList={corp} />
          <CheckList title={"Plateatici"} filterList={twoAns} />
          <CheckList title={"Filter By Year"} filterList={["todo"]} />
        </Menu>
      </div>
    );
  }
}
