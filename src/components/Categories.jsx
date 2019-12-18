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

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category_list: []
        }
        this.openCategoryModal = props.openCategoryModal.bind(this);
    }

    fetchData = async () => {
        return axios.get("https://dev-expense-track.azurewebsites.net/api/Category", {
            responseType: "json"
        }).then(res => res.data)
        .catch(err => console.log(err) );
    }

    async componentDidMount() {
        this.setState({ category_list: await this.fetchData() })
    }

    deleteCategoryEvent = async (id) => {
        swal.fire({
            title: "Delete Category",
            text: "Are you sure?",
            showConfirmButton: true,
            showCancelButton: true
        }).then(e => {
            if (e.value)
                this.deleteCategory(id)
        });
    }

    deleteCategory = async (id) => {
        await axios.delete("https://dev-expense-track.azurewebsites.net/api/Category/" + id);
        this.setState({category_list: await this.fetchData()});
    }

    fillTable = () => {
        if (this.state.category_list == null) 
            return <tr></tr>;
        else {
            return this.state.category_list.map(category => {
                let payments_total = 0;
                if (category.payments != null)
                    category.payments.map(payment => payments_total += payment.amount);
                return <tr>
                    <td> {category.name} </td>
                    <td> {payments_total.toFixed(2)} </td>
                    <td> {category.payments == null ? 0 : category.payments.length} </td>
                    <td> <Button variant="danger" size="sm" onClick={(e) => this.deleteCategoryEvent(category.id)}> <FontAwesomeIcon icon={faTrash} /> </Button> </td>
                </tr>
            });
        }
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
                    <Table striped hover>
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