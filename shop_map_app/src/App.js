import React, { Component } from "react";
import BottomBar from "./containers/bottom_bar";
import FilterMenu from "./containers/filter_menu";

class App extends Component {
  render() {
    return (
      <div>
        <FilterMenu />
        <BottomBar />
      </div>
    );
  }
}

export default App;
