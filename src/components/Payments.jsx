import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class Payments extends Component {

    fetchData = () => {
        
    }

    fillTable = (data) => {
        return data.map(payment => {
            return <tr>
                <td> {payment.paymentNum} </td>
                <td> {payment.observations} </td>
                <td> {payment.amount} </td>
                <td> {payment.category_name} </td>
            </tr>
        });
    }

    render() {
        const payments = [
            {
                paymentNum: "# 3",
                observations: "---",
                amount: 5,
                category_name: "Bikes"
            },
            {
                paymentNum: "# 4",
                observations: "Trying here",
                amount: 10,
                category_name: "Car"
            }
        ];

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
                        <tbody>
                            { this.fillTable(payments) }
                        </tbody>    
                    </Table>  
                </Card.Body>
            </Card>
        </div>;
    }
}

export default Payments;