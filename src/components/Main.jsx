import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const renderCategories = () => {
    const categories = [
        'Bike',
        'Car',
        'Plane'
    ];
    return categories.map( (category, index) => {
        return <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={index}> {category} </Accordion.Toggle>
            <Accordion.Collapse eventKey={index}>
                <Card.Body>
                    <Table hover>
                        <tbody>
                            { renderPayments() }  
                        </tbody>  
                    </Table> 
                </Card.Body>
            </Accordion.Collapse>
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
        return <tr>
            <td> <b> {payment.paymentName} </b> </td> 
            <td> {payment.observations} </td>  
            <td> {payment.amount.toFixed(2)} </td>
            <td>
                <ButtonGroup>
                    <Button> <FontAwesomeIcon icon="archive" /> </Button>
                    <Button> <FontAwesomeIcon icon="pencil" /> </Button>
                    <Button> <FontAwesomeIcon icon="trash" /> </Button>
                </ButtonGroup>     
            </td>
        </tr>;
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