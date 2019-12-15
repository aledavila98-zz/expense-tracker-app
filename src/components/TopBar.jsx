import React, { Component } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(props)
    }

    render() {
        return <div>
            <NavBar bg="dark" variant="dark" expand="lg">
                <NavBar.Brand href="#" >
                    <b> Expense Tracker </b>
                </NavBar.Brand>
                <NavBar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="#" >
                            Categories
                        </Nav.Link>
                        <Nav.Link href="#" >
                            Payments
                        </Nav.Link>
                    </Nav>
                </NavBar.Collapse>
            </NavBar>
        </div>;
    }
}

export default TopBar;