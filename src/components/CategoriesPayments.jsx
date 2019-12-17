import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const swal = withReactContent(Swal);

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
        this.setState({ category_list: await this.fetchData() });
    }

    componentDidUpdate() {
        let max_value = 0;
        let max_name = '';
        if (this.state.category_list === null) {
            this.state.category_list.forEach(category => {
                let category_total = 0;
                category.payments.map(p => category_total += p.amount);
                if (category_total > max_value) {
                    max_value = category_total;
                    max_name = category.name;
                }
            });
            
            swal.fire({
                title: "Watch out!",
                text: "You're spending too much on " + max_name
            })
        }
    }

    deletePaymentEvent = async (id) => {
        swal.fire({
            title: "Delete Payment",
            text: "Are you sure?",
            showConfirmButton: true,
            showCancelButton: true
        }).then(e => {
            if (e.value) {
                this.deletePayment(id);
            }
        });
    }

    deletePayment = async (id) => {
        await axios.delete("http://localhost:5000/api/Payment/" + id);
        this.setState({category_list: await this.fetchData()});
    }

    renderCategories = () => {
        let max_total = 0;
        if (this.state.category_list === null) {
            return <Card></Card>;
        }
        return this.state.category_list.map( (category, index) => {
            let total_category = 0;
            if (category.payments !== null)
                category.payments.map(payment => total_category += payment.amount);
            
            if (total_category > max_total) {
                max_total = total_category;
            }

            return <Card> 
                <Accordion.Toggle as={Card.Header} variant="link" eventKey={category.id}>
                    <Row>
                        <Col xs={8} style={{alignContent:"center"}}> 
                            <span style={{fontSize:18, color:""}}> <b> {category.name} </b> </span> 
                        </Col> 
                        <Col xs={4}> <span style={{color:"red"}}> {total_category.toFixed(2)} </span> </Col> 
                    </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={category.id}>
                    <Card.Body>
                        <Table size="sm" responsive hover>
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
            </Card>;
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
                        <Button variant="danger" size="sm" onClick={(e) => this.deletePaymentEvent(payment.id)}> <FontAwesomeIcon icon={faTrash} /> </Button>     
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