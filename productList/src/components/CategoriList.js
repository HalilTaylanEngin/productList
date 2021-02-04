import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import "./CategoryList.css";

export class CategoryList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h4 className="text-center text-brown"> {this.props.info.title}</h4>{" "}
        <h6 className="text-brown"> {this.props.currentCategory} </h6>
        <ListGroup as="ul">
          {" "}
          {this.state.categories.map((category) => (
            <ListGroup.Item
              id="categoryLİstItem"
              onClick={() => this.props.changeCategory(category)}
              active={
                category.name === this.props.currentCategory ? true : false
              }
              key={category.categoryID}
              as="li"
            >
              {" "}
              {category.name}{" "}
            </ListGroup.Item>
          ))}{" "}
        </ListGroup>
      </div>
    );
  }
}

export default CategoryList;
