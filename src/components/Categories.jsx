import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class Categories extends Component {
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