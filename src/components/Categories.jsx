import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

class Categories extends Component {
    render() {
        return <div>
            <Card>
                <Card.Header>
                    <h3> Categories </h3>
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
                    </Table>
                </Card.Body>
            </Card>
        </div>;
    }
}

export default Categories;