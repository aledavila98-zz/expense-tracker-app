import React, { Component } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class TopBar extends Component {
    
    handleClick = () => {
        // let route = '';
        // if (screen === 0) {
        //     route = 'CategoriesPayments';
        // } else if (screen === 1) {
        //     route = 'Categories';
        // } else if (screen === 2) {
        //     route = 'Payments';
        // }

        // this.setState({
        //     screen: route
        // });
        console.log(this.state)
    }

    render() {
        return <div>
            <NavBar bg="dark" variant="dark" expand="lg">
                <NavBar.Brand href="#" key={0} onClick={this.handleClick}>
                    <b> Expense Tracker </b>
                </NavBar.Brand>
                <NavBar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="#" key={1} onClick={this.handleClick}>
                            Categories
                        </Nav.Link>
                        <Nav.Link href="#" key={2} onClick={this.handleClick}>
                            Payments
                        </Nav.Link>
                    </Nav>
                </NavBar.Collapse>
            </NavBar>
        </div>;
    }
}

export default TopBar;