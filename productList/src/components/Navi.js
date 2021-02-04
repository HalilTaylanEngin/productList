import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './Navi.css'




export class Navi extends Component {
    totalPrice = (price, quantity) => {
        return "Total Price" + price * quantity + " $ "
    }
    render() {
        return (
            <div className="bg-light pt-5">
                 <h2 className="text-center w-100"> Simple Product List</h2>
                <Navbar bg="light" expand="lg">
               
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home"> Home </Nav.Link>
                            <NavDropdown title={<b className="ml-4" >MY CART <i className="fas fa-cart-plus"> {" " + this.props.myCart.length} </i></b>}
                                id="basic-nav-dropdown">
                                {this.props.myCart.map((product, index) => (

                                    <Nav.Link key={index} href="#link">

                                        <div className="addedItem">
                                            <div className="row">
                                                <div className="col">
                                                    <h6>{product.product.name}</h6>
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col d-flex justify-content-between">
                                                    <p> Price: {product.product.unitPrice} $</p>
                                                    <p> Added: <span> {product.quantity} </span></p>
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col">
                                                    <h6> Total Price {product.quantity * product.product.unitPrice} $ </h6>
                                                </div>
                                            </div>
                                        </div>

                                    </Nav.Link>
                                )
                                )}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navi
