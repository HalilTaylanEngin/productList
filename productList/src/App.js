import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoriList from "./components/CategoriList";
import ProductList from "./components/ProductList";
import Navi from "./components/Navi";
import "./index.css"


export class App extends Component {
  state = {
    currentCategory: "All",
    products: [],
    myCart: [],
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.name })
    this.getProducts(category.categoryID)
  }
  getProducts = (categoryID) => {
    let url = "http://localhost:3000/products"
    if (categoryID) {
      url += "?categoryID=" + categoryID
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ products: data }))
    } else {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ products: data }))
    }
  }
  componentDidMount() {
    this.getProducts()
  }
  addToCart = (product) => {
    var newCart = this.state.myCart
    var addedItem = newCart.find(item => item.product.productID === product.productID)
    if (addedItem) {
      addedItem.quantity += 1
    } else {
      newCart.push({ product: product, quantity: 1 })
    }
    this.setState({ myCart: newCart })
  }

  render() {
    let productInfo = { title: "PRODUCTS" }
    let categoryInfo = { title: "CATEGORİES" }

    return (
      <div>
        <Container container-fluid-md="true" >
          <Navi myCart={this.state.myCart} />
          <Row>
            <Col xs={3}>
              <CategoriList info={categoryInfo}
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory} />
            </Col>
            <Col xs={9}>
              <ProductList info={productInfo}
                products={this.state.products}
                subHeading={this.state.currentCategory}
                addToCart={this.addToCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
