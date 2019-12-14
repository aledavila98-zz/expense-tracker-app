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
    return categories.map( (category, index) => {
        return <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={index}> {category} </Accordion.Toggle>
            {/* <Accordion.Collapse eventKey={index}>
                {/* { renderPayments() } */}
            </Accordion.Collapse> */}
        </Card.Header>;
    })
}

const renderPayments = () => {
    const payments = [
        {
            paymentName: "Pago 1",
            observations: "---",
            amount: 200
        },
        {
            paymentName: "Pago 2",
            observations: "---",
            amount: 100
        }
    ];
    return payments.map(payment => {
        return <Card.Body>
            <b> {payment.paymentName} </b> - {payment.observations} - {payment.amount.toFixed(2)}
        </Card.Body>;
    });
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