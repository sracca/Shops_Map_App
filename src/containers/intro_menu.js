import React, { Component } from "react";
import {slide as Menu} from 'react-burger-menu'
import {IntroMenu} from "../../src/styles/containers/intro_menu"
import { colors, fonts } from "../lib/theme";
import { Label } from "reactstrap";

class Intro_Menu extends React.Component {
    showsettings (event){
        event.preventDefault();
    }

    render () {
        return (
            <Menu 
                styles = {IntroMenu}
                width={ '30%' }
                isOpen={ true }
                >
            <Label
                styles = {IntroMenu}
                fontStyle = {fonts.lato}
                fontColor = {colors.green}
                >For over 10 years, the WPI VPC has been collecting data on Venetian businesses. 
                This data has been compiled here, and can be sorted and displayed for your 
                viewing pleasure.
                </Label>
          </Menu>
        )
    }
}

export default Intro_Menu