import React, { Component } from "react";
import CategoriesPayments from "./CategoriesPayments";
import Categories from "./Categories";
import Payments from "./Payments";
import CategoryModal from "./CategoryModal";
import PaymentModal from "./PaymentModal";

class Screens extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Screen: props.Screen,
            crud: 2,
            categoryIsVisible: false,
            paymentIsVisible: false
        };
    }

    componentWillReceiveProps(props)
    {
        this.setState({
            Screen: props.Screen
        })
    }

    openCategoryModal = (crud) => {
        this.setState({
            categoryIsVisible: true,
            crud: crud
        });
    }

    hideCategoryModal = () => {
        this.setState({
            categoryIsVisible: false
        });
    }

    openPaymentModal = (crud, categoryId) => {
        this.setState({
            paymentIsVisible: true,
            crud: crud,
            categoryId: categoryId
        });
    }

    hidePaymentModal = () => {
        this.setState({
            paymentIsVisible: false
        });
    }

    render () {
        const {Screen, categoryIsVisible, paymentIsVisible, crud, categoryId} = this.state;
        if (Screen === 'CategoriesPayments') 
            return <div> 
                <CategoriesPayments openCategoryModal={this.openCategoryModal} openPaymentModal={this.openPaymentModal} />
                <CategoryModal isVisible={categoryIsVisible} crud={crud} hideCategoryModal={this.hideCategoryModal} />
                <PaymentModal isVisible={paymentIsVisible} crud={crud} hidePaymentModal={this.hidePaymentModal} categoryId={categoryId} />    
            </div>;
        else if (Screen === 'Categories')
            return <div> 
                <Categories openCategoryModal={this.openCategoryModal} />
                <CategoryModal isVisible={categoryIsVisible} crud={crud} hideCategoryModal={this.hideCategoryModal} />  
            </div>;
        else if (Screen === 'Payments')
            return <div> 
                <Payments openPaymentModal={this.openPaymentModal} />
                <PaymentModal isVisible={paymentIsVisible} crud={crud} hidePaymentModal={this.hidePaymentModal} categoryId={categoryId} /> 
            </div>;        
    }
}

export default Screens;