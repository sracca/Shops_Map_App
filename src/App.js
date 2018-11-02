import React, { Component } from "react";
import BottomBar from "./containers/bottom_bar";
import FilterMenu from "./containers/filter_menu";
import MapContainer from "./containers/map_container";
<<<<<<< HEAD
import Intro_Menu from "./containers/intro_menu"

const testStores = [
  {
    key: "a",
    lat: 45.43492287,
    lon: 12.33919474,
    name: "Leather Goods Store"
  },
  {
    key: "b",
    lat: 45.43781593,
    lon: 12.33657174,
    name: "Gelateria"
  }
];
=======
import * as firebase from "firebase";
import { initFire } from "./store/firebase";
import { createYearList } from "./constants/year_lists";
>>>>>>> 40f7d1912c04bc6e7dbeaa9edb498033b197b775

class App extends Component {
  state = {
    currStores: []
  };

  componentWillMount = () => {
    initFire();
    createYearList();
    const dataRef = firebase.database().ref("/");
    let temp = [];
    dataRef.on("child_added", snapshot => {
      let item = snapshot.val();
      //TODO: filter by year
      temp.push({
        key: item.g,
        lat: parseFloat(item.data.latitude, 10),
        lon: parseFloat(item.data.longitude, 10),
        yearOpened: parseInt(item.data.opened_in_year, 10),
        sestiere: item.data.setiere_code,
        address: item.data.street_and_number,
        nace: item.data.ateco_code,
        type: item.data.store_type,
        name: item.data.store_name
      });
      this.setState({ currStores: temp });
    });
  };

  render() {
    return (
      <div>
<<<<<<< HEAD
        <SideMenu />
        <Intro_Menu isOpen={true}/>
        <MapContainer stores={testStores} />
=======
        <FilterMenu />
        <MapContainer stores={this.state.currStores} />
>>>>>>> 40f7d1912c04bc6e7dbeaa9edb498033b197b775
        <BottomBar />
      </div>
    );
  }
}
  

  export default App;
