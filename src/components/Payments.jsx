import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

const swal = withReactContent(Swal);

class Payments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            payments_list: []
        };
    }

    fetchData = async () => {
        return axios.get("https://dev-expense-track.azurewebsites.net/api/Payment", {
            responseType: "json"
        }).then(res => res.data)
        .catch(err => console.log(err) );
    }

    async componentDidMount() {
        this.setState({ payments_list: await this.fetchData() });
    }

    deletePaymentEvent = async (id) => {
        swal.fire({
            title: "Delete Payment",
            text: "Are you sure?",
            showConfirmButton: true,
            showCancelButton: true
        }).then(e => {
            if (e.value)
                this.deletePayment(id)
        });
    }

    deletePayment = async (id) => {
        await axios.delete("https://dev-expense-track.azurewebsites.net/api/Payment/" + id);
        this.setState({payments_list: await this.fetchData()});
    }

    fillTable = () => {
        if (this.state.payments_list == null)
            return <tr></tr>;
        else {
            return this.state.payments_list.map(payment => {
                return <tr>
                    <td> {payment.paymentNum} </td>
                    <td> {payment.amount} </td>
                    <td> {payment.category.name} </td>
                    <td> <Button variant="danger" size="sm" onClick={(e) => this.deletePaymentEvent(payment.id)}> <FontAwesomeIcon icon={faTrash} /> </Button> </td>
                </tr>
            });
        }
    }

    render() {
        return <div>
            <Card>
                <Card.Header>
                    <h3> Payments </h3>
                </Card.Header>
                <Card.Body>
                    <Table striped hover>
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