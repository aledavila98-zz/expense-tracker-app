import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category_list: []
        }
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
            </tr>
        });
    }

    render() {
        return <div>
            <Card>
                <Card.Header>
                    <div className="row">
                        <div className="col-sm-8" style={{alignContent: "right"}}> <h3> Categories </h3> </div>
                        <div className="col-sm-4" style={{alignItems: "right"}}> <Button variant="primary" size="sm">New category</Button> </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Expense Total</th>
                                <th>Payments Count</th>
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