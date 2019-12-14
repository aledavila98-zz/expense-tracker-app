import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const renderCategories = () => {
    const categories = [
        'Bike',
        'Car',
        'Plane'
    ];
    return categories.map(category => {
        return <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0"> {category} </Accordion.Toggle>
        </Card.Header>;
    })
} 

class Main extends Component {
    render () {
        return <div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Body>
                        { renderCategories() }
                    </Card.Body>
                </Card>
            </Accordion>
        </div>;
    }
}

export default Main;