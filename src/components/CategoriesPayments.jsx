import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons/faPencilAlt";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const renderCategories = () => {
    const categories = [
        {
            id: 1,
            name: 'Bike'
        },
        {
            id: 2,
            name: 'Car'
        },
        {
            id: 3,
            name: 'Plane'
        }
    ];
    return categories.map( (category, index) => {
        return <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={category.id}> {category.name} </Accordion.Toggle>
            <Accordion.Collapse eventKey={category.id}>
                <Card.Body>
                    <Table hover>
                        <tbody>
                            { renderPayments() }  
                        </tbody>
                        <tfoot>
                            <tr> 
                                <td colSpan="4"> <Button variant="light" block> + Add Payment </Button> </td>
                            </tr>
                        </tfoot>  
                    </Table> 
                </Card.Body>
            </Accordion.Collapse>
        </Card.Header>;
    })
}

const renderPayments = () => {
    const payments = [
        {
            id: 1,
            paymentName: "Pago 1",
            observations: "---",
            amount: 200
        },
        {
            id: 2,
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
                    <Button variant="primary" size="sm"> <FontAwesomeIcon icon={faPencilAlt} /> </Button>
                    <Button variant="danger" size="sm"> <FontAwesomeIcon icon={faTrash} /> </Button>
                </ButtonGroup>     
            </td>
        </tr>;
    });
}

class CategoriesPayments extends Component {
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

export default CategoriesPayments;