import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class PaymentModal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isVisible: props.isVisible,
            categoryId: props.categoryId,
            crud: props.crud 
        };
    }

    handleClose = () => {
        this.setState({
            isVisible: false
        });
    }

    commitCategory = (op) => {
        this.setState({
            isVisible: false
        });
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
                        <Form.Group controlId="formCategory">
                            <Form.Label> Amount </Form.Label>
                            <Form.Control type="number" placeholder="Enter amount" />
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