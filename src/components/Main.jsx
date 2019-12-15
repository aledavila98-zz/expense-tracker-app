import React, { Component } from "react";
import CategoriesPayments from "./CategoriesPayments";
import Categories from "./Categories";
import Payments from "./Payments";

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            screen: 'CategoriesPayments'
        };
    }
    render () {
        const {screen} = this.state;
        if (screen === 'CategoriesPayments')
            return <CategoriesPayments />;
        else if (screen === 'Categories')
            return <Categories />;
        else if (screen === 'Payments')
            return <Payments />;
    }
}

export default Main;