import React, { Component } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class TopBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            screen: 'CategoriesPayments'
        };

        this.handleClick = this.handleClick.bind(0);
    }
    
    handleClick = (screen) => {
        console.log(screen)
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
        console.log(this.state);
    }

    render() {
        return <div>
            <NavBar bg="dark" variant="dark" expand="lg">
                <NavBar.Brand href="#" onClick={this.handleClick.bind(0)}>
                    <b> Expense Tracker </b>
                </NavBar.Brand>
                <NavBar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="#" onClick={this.handleClick.bind(1)}>
                            Categories
                        </Nav.Link>
                        <Nav.Link href="#" onClick={this.handleClick.bind(2)}>
                            Payments
                        </Nav.Link>
                    </Nav>
                </NavBar.Collapse>
            </NavBar>
        </div>;
    }
}

export default TopBar;