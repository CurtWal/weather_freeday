import React, { Component } from "react";
import { Card } from "react-bootstrap";
export default class Weatherdisplay extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`https://www.weatherbit.io/static/img/icons/${this.props.img}.png`}
            style={{ height: "175px" }}
          />
          <Card.Body>
            <Card.Title>{this.props.description}</Card.Title>
            <Card.Text>
              {this.props.date}
              <br></br>
              {this.props.temp} f with a high of {this.props.tempHigh} f
              <br></br>
              {this.props.wind} wind speed
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`https://www.weatherbit.io/static/img/icons/${this.props.img2}.png`}
            style={{ height: "175px" }}
          />
          <Card.Body>
            <Card.Title>{this.props.description2}</Card.Title>
            <Card.Text>
                {this.props.date2}
                <br></br>
              {this.props.temp2} f with a high of {this.props.temp2High} f
              <br></br>
              {this.props.wind2} wind speed
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
