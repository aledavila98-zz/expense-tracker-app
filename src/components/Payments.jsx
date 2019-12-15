import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class Payments extends Component {
    render() {
        return <div>
            <Card>
                <Card.Header>
                    <div className="row">
                        <div className="col-sm-8" style={{alignContent: "right"}}> <h3> Payments </h3> </div>
                        <div className="col-sm-4" style={{alignItems: "right"}}> <Button variant="primary" size="sm">New payment</Button> </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th> Payment Number </th>
                                <th> Observations </th>
                                <th> Amount </th>
                                <th> Category </th>    
                            </tr>      
                        </thead>    
                    </Table>  
                </Card.Body>
            </Card>
        </div>;
    }
}

export default Payments;