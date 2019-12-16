import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons/faPencilAlt";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import axios from "axios";

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category_list: []
        }
        this.openCategoryModal = props.openCategoryModal.bind(this);
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

    fillTable = () => {
        return this.state.category_list.map(category => {
            let payments_total = 0;
            if (category.payments != null)
                payments_total += category.payments.map(payment => payment.amount);
            return <tr>
                <td> {category.name} </td>
                <td> {payments_total} </td>
                <td> {category.payments == null ? 0 : category.payments.length} </td>
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
                    <div className="row">
                        <div className="col-sm-8" style={{alignContent: "right"}}> <h3> Categories </h3> </div>
                        <div className="col-sm-4" style={{alignItems: "right"}}> 
                            <Button variant="primary" size="sm" onClick={(e) => this.openCategoryModal(0)}> New category </Button> 
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Expense Total</th>
                                <th>Payments Count</th>
                                <th></th>
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

export default Categories;