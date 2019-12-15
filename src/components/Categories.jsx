import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class Categories extends Component {

    fetchData = () => {

    }

    fillTable = (data) => {
        return data.map(category => {
            return <tr>
                <td> {category.name} </td>
                <td> {category.total} </td>
                <td> {category.payCount} </td>
            </tr>
        })
    }

    render() {
        const categories = [
            {
                name: "Bikes",
                total: 200,
                payCount: 2
            },
            {
                name: "Cars",
                total: 100,
                payCount: 3
            }
        ];

        return <div>
            <Card>
                <Card.Header>
                    <div className="row">
                        <div className="col-sm-8" style={{alignContent: "right"}}> <h3> Categories </h3> </div>
                        <div className="col-sm-4" style={{alignItems: "right"}}> <Button variant="primary" size="sm">New category</Button> </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Expense Total</th>
                                <th>Payments Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.fillTable(categories) }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>;
    }
}

export default Categories;