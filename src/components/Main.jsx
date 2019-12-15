import React, { Component } from "react";
import CategoriesPayments from "./CategoriesPayments";

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            screen: 'CategoriesPayments'
        };
    }
    render () {
        if (this.state.screen === 'CategoriesPayments')
            return <CategoriesPayments />;
    }
}

export default Main;