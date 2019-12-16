import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons/faPencilAlt";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import axios from "axios";

class Payments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            payments_list: []
        };
    }

    fetchData = async () => {
        return axios.get("http://localhost:5000/api/Payment", {
            responseType: "json"
        }).then(res => res.data)
        .catch(err => console.log(err) );
    }

    async componentDidMount() {
        this.setState({ payments_list: await this.fetchData() });
    }

    fillTable = () => {
        return this.state.payments_list.map(payment => {
            return <tr>
                <td> {payment.paymentNum} </td>
                <td> {payment.amount} </td>
                <td> --- </td>
                <td>
                    <ButtonGroup>
                        <Button variant="primary" size="sm"> <FontAwesomeIcon icon={faPencilAlt} /> </Button>
                        <Button variant="danger" size="sm"> <FontAwesomeIcon icon={faTrash} /> </Button>
                    </ButtonGroup>     
                </td>
            </tr>
        });
    }

    render() {
        return <div>
            <Card>
                <Card.Header>
                    <h3> Payments </h3>
                </Card.Header>
                <Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th> Payment Number </th>
                                <th> Amount </th>
                                <th> Category </th>
                                <th> </th>    
                            </tr>      
                        </thead>
                        <tbody>
                            { this.fillTable() }
                        </tbody>    
                    </Table>  
                </Card.Body>
            </Card>
        </div>;
    }
}

export default Payments;