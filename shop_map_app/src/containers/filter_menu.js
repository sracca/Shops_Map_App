import React, { Component } from "react";
import CheckList from "../components/filter_check";
import { miscGoods } from "../constants/goods_lists";

export default class FilterMenu extends React.Component {
  render() {
    return <CheckList title={"Goods Sold"} filterList={miscGoods} />;
  }
}
