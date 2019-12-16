import React, { Component } from "react";
import TopBar from "./TopBar";
import Screens from "./Screens"

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Screen: 'CategoriesPayments'
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
            Screen: route,
            change: true
        });
    }

    render () {
        const {Screen} = this.state;
        return <div>
            <TopBar handleScreen={this.handleScreen} />
            <Screens Screen={Screen} />
        </div>
    }
}

export default Main;