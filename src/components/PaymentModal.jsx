import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class PaymentModal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isVisible: props.isVisible,
            categoryId: props.categoryId,
            paymentId: props.hasOwnProperty("paymentId") ? props.paymentId : "",
            crud: props.crud 
        };

        this.paymentNumText = React.createRef();
        this.paymentAmount = React.createRef();

        this.hidePaymentModal = props.hidePaymentModal.bind(this);
    }

    handleClose = () => {
        this.setState({
            isVisible: false
        });
        this.hidePaymentModal();
    }

    commitCategory = (op) => {
        if (op === 0) {
            const paymentNum = this.paymentNumText.current.value.trim();
            const paymentAmount = this.paymentAmount.current.value;
            if (paymentNum.length > 0 && paymentAmount > 0) {
                axios.post("http://localhost:5000/api/Payment",
                { 
                    paymentNum: paymentNum,
                    paymentAmount: paymentAmount,
                    categoryId: this.state.categoryId
                },
                { 
                    responseType: "json" 
                }
            )
            .then(res => console.log(res))
            .catch(err => console.log(err));
            }
        }
        this.setState({
            isVisible: false
        });
        this.hidePaymentModal();
    }

    render() {
        const title = this.state.crud === 0 ? 'Create Payment' : 'Update Payment';
        const btnText = this.state.crud === 0 ? 'Create' : 'Update';
        return <div>
            <Modal show={this.state.isVisible} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> {title}  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formPayNum">
                            <Form.Label> Payment Number </Form.Label>
                            <Form.Control ref={this.paymentNumText} type="text" placeholder="Enter payment number" />
                        </Form.Group>
                        <Form.Group controlId="formAmount">
                            <Form.Label> Amount </Form.Label>
                            <Form.Control ref={this.paymentAmount} type="number" placeholder="Enter amount" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" size="sm" onClick={(e) => this.commitCategory(this.state.crud)}> {btnText} </Button>
                    <Button variant="danger" size="sm" onClick={this.handleClose}> Discard </Button>
                </Modal.Footer>
            </Modal>
        </div>;
    }
}

export default PaymentModal;