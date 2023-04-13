import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styling/cardItem.css";
const CardItem = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="card-item">
        <Card.Img variant="top" alt="logo" src={props.img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href={props.url} target="_blank">
            <Button variant="primary">More {">>"}</Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardItem;
