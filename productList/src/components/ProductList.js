import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'
import "./ProductList.css"

export class ProductList extends Component {

    render() {
        return (
            <div>
                <h4 className="text-center text-brown" >{this.props.info.title}</h4>
                <h6 className="text-right text-brown">in the {this.props.subHeading} list </h6>
                <Table striped bordered hover size="md">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Units In Stock</th>
                            <th>Quantity Per Unit</th>
                            <th>Add</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr key={product.productID} >
                                <td>{product.productID} </td>
                                <td>{product.name} </td>
                                <td>{product.unitPrice} $ </td>
                                <td>{product.unitsInStock} Pieces</td>
                                <td>{product.quantityPerUnit} </td>
                                <td> <Button id="addButton"
                                    className="text-light rounded-0"
                                    variant="light"
                                    as="input"
                                    type="submit"
                                    value="add"
                                    size="sm"
                                    onClick={() => this.props.addToCart(product)}
                                >
                                </Button>{''} </td>
                            </tr>
                        )

                        )}

                    </tbody>
                </Table>
            </div>

        )
    }
}

export default ProductList

