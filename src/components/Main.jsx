import React, { Component } from "react";
import CategoriesPayments from "./CategoriesPayments";
import Categories from "./Categories";
import Payments from "./Payments";
import TopBar from "./TopBar";

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            screen: 'CategoriesPayments'
        };
    }

    handleScreen = (screen) => {
        let route = '';
        if (screen === 0) {
            route = 'CategoriesPayments';
        } else if (screen === 1) {
            route = 'Categories';
        } else if (screen === 2) {
            route = 'Payments';
        }

        this.setState({
            screen: route
        });
    }

    render () {
        const {screen} = this.state;
        if (screen === 'CategoriesPayments')
            return <div> <TopBar handleScreen={this.handleScreen}  /> <CategoriesPayments /> </div>;
        else if (screen === 'Categories')
            return <div> <TopBar handleScreen={this.handleScreen} /> <Categories /> </div>;
        else if (screen === 'Payments')
            return <div> <TopBar handleScreen={this.handleScreen} /> <Payments /> </div>;
    }
}

export default Main;