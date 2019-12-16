import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class CategoryModal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isVisible: props.isVisible,
            categoryId: props.hasOwnProperty("categoryId") ? props.categoryId : "",
            crud: props.crud 
        };
        this.nameInput = React.createRef();
        this.hideCategoryModal = props.hideCategoryModal.bind(this);
    }

    handleClose = () => {
        this.setState({
            isVisible: false
        });
        this.hideCategoryModal();
    }

    commitCategory = (op) => {
        if (op === 0)
        {
            const name = this.nameInput.current.value.trim();
            if (name.length > 0) {
                axios.post("http://localhost:5000/api/Category",
                    { 
                        name: name 
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
        this.hideCategoryModal();
    }

    render() {
        const title = this.state.crud === 0 ? 'Create Category' : 'Update Category';
        const btnText = this.state.crud === 0 ? 'Create' : 'Update';
        return <div>
            <Modal show={this.state.isVisible} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> {title}  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formCategory">
                            <Form.Label> Name </Form.Label>
                            <Form.Control type="text" ref={this.nameInput} placeholder="Enter category name" />
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

export default CategoryModal;