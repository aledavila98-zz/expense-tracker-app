import React, { Component } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleScreen = props.handleScreen.bind(this);
    }

    render() {
        return <div>
            <NavBar bg="dark" variant="dark" expand="lg">
                <NavBar.Brand href="#" onClick={(e) => this.handleScreen(0)}>
                    <b> Expense Tracker </b>
                </NavBar.Brand>
                <NavBar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="#" onClick={(e) => this.handleScreen(1)}>
                            Categories
                        </Nav.Link>
                        <Nav.Link href="#" onClick={(e) => this.handleScreen(2)}>
                            Payments
                        </Nav.Link>
                    </Nav>
                </NavBar.Collapse>
            </NavBar>
        </div>;
    }
}

export default TopBar;