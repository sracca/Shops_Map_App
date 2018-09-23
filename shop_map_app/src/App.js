import React, { Component } from "react";
import BottomBar from "./containers/bottom_bar";
import FilterMenu from "./containers/filter_menu";
import Sidebar from "./containers/side_bar";

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        {/* <FilterMenu /> */}
        <BottomBar />
      </div>
    );
  }
}

export default App;
