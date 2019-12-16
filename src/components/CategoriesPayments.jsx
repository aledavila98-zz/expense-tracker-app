import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import axios from "axios";

class CategoriesPayments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category_list: []
        }
        this.openCategoryModal = props.openCategoryModal.bind(this);
        this.openPaymentModal = props.openPaymentModal.bind(this);
    }

    fetchData = async () => {
        return axios.get("http://localhost:5000/api/Category", {
            responseType: "json"
        }).then(res => res.data)
        .catch(err => console.log(err) );
    }

    async componentDidMount() {
        this.setState({ category_list: await this.fetchData() })
    }

    renderCategories = () => {
        return this.state.category_list.map(category => {
            let total_category = 0;
            if (category.payments !== null)
                total_category += category.payments.map(payment => payment.amount);
            return <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={category.id}>
                    {category.name} - {total_category} 
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={category.id}>
                    <Card.Body>
                        <Table hover>
                            <tbody>
                                { this.renderPayments(category.payments) }  
                            </tbody>
                            <tfoot>
                                <tr> 
                                    <td colSpan="4"> <Button variant="light" block onClick={(e) => this.openPaymentModal(category.id)}> + Add Payment </Button> </td>
                                </tr>
                            </tfoot>  
                        </Table> 
                    </Card.Body>
                </Accordion.Collapse>
            </Card.Header>;
        })
    }
    
    renderPayments = (payments) => {
        if (payments == null) {
            return <tr></tr>;
        } else {
            return payments.map(payment => {
                return <tr>
                    <td> <b> {payment.paymentNum} </b> </td>  
                    <td> {payment.amount.toFixed(2)} </td>
                    <td>
                        <Button variant="danger" size="sm"> <FontAwesomeIcon icon={faTrash} /> </Button>     
                    </td>
                </tr>;
            });
        }
    }

    render () {
        return <div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Body>
                        { this.renderCategories() }
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" block onClick={this.openCategoryModal}> + Add Category </Button>
                    </Card.Footer>
                </Card>
            </Accordion>
        </div>;
    }
}

export default CategoriesPayments;