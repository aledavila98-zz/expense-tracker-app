import React, { Component } from "react";
import CategoriesPayments from "./CategoriesPayments";
import Categories from "./Categories";
import Payments from "./Payments";
import TopBar from "./TopBar";
import CategoryModal from "./CategoryModal";
import PaymentModal from "./PaymentModal";

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            screen: 'CategoriesPayments',
            crud: 2,
            categoryIsVisible: false,
            paymentIsVisible: false
        };
    }

    handleScreen = (screen) => {
        let route = '';
        if (screen === 0) {
            route = 'CategoriesPayments';
        } else if (screen === 1) {
            route = 'Categories';
        } else if (screen === 2) {
            route = 'Payments';
        }

        this.setState({
            screen: route
        });
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
        const {screen, categoryIsVisible, paymentIsVisible, crud, categoryId} = this.state;
        if (categoryIsVisible) {

            if (screen === 'CategoriesPayments')
                return <div> 
                    <TopBar handleScreen={this.handleScreen}  /> 
                    <CategoriesPayments openCategoryModal={this.openCategoryModal} openPaymentModal={this.openPaymentModal} />
                    <CategoryModal isVisible={true} crud={crud} hideCategoryModal={this.hideCategoryModal} />  
                </div>;
            else if (screen === 'Categories')
                return <div> 
                    <TopBar handleScreen={this.handleScreen} /> 
                    <Categories openCategoryModal={this.openCategoryModal} />
                    <CategoryModal isVisible={true} crud={crud} hideCategoryModal={this.hideCategoryModal} />  
                </div>;
            else if (screen === 'Payments')
                return <div> 
                    <TopBar handleScreen={this.handleScreen} /> 
                    <Payments openPaymentModal={this.openPaymentModal} /> 
                </div>;

        } else if (paymentIsVisible) {

            if (screen === 'CategoriesPayments')
                return <div> 
                    <TopBar handleScreen={this.handleScreen}  /> 
                    <CategoriesPayments openCategoryModal={this.openCategoryModal} openPaymentModal={this.openPaymentModal} />
                    <PaymentModal isVisible={true} crud={crud} hidePaymentModal={this.hidePaymentModal} categoryId={categoryId} />  
                </div>;
            else if (screen === 'Categories')
                return <div> 
                    <TopBar handleScreen={this.handleScreen} /> 
                    <Categories openCategoryModal={this.openCategoryModal} />  
                </div>;
            else if (screen === 'Payments')
                return <div> 
                    <TopBar handleScreen={this.handleScreen} /> 
                    <Payments openPaymentModal={this.open}/> 
                    <PaymentModal isVisible={true} crud={crud} hidePaymentModal={this.hidePaymentModal} categoryId={categoryId} />
                </div>;

        } else {

            if (screen === 'CategoriesPayments')
                return <div> 
                    <TopBar handleScreen={this.handleScreen}  /> 
                    <CategoriesPayments openCategoryModal={this.openCategoryModal} openPaymentModal={this.openPaymentModal} />
                </div>;
            else if (screen === 'Categories')
                return <div> 
                    <TopBar handleScreen={this.handleScreen} /> 
                    <Categories openCategoryModal={this.openCategoryModal} />
                </div>;
            else if (screen === 'Payments')
                return <div> 
                    <TopBar handleScreen={this.handleScreen} /> 
                    <Payments openPaymentModal={this.openPaymentModal} /> 
                </div>;

        }
    }
}

export default Main;