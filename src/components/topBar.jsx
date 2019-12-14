import React, { Component } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class topBar extends Component {
    render() {
        return <NavBar bg="dark" expand="lg">
            <NavBar.Brand href="#">
                <b> Expense Tracker </b>
            </NavBar.Brand>
            <NavBar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="#">
                        Categories
                    </Nav.Link>
                    <Nav.Link href="#">
                        Payments
                    </Nav.Link>
                </Nav>
            </NavBar.Collapse>
        </NavBar>;
    }
}

export default topBar;