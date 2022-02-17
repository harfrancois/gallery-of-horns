import React from 'react';
import Card from 'react-bootstrap/Card';
import './hornedBeast.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    }
  }
  handelLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }
  handelClick = () => {
    this.handelLikes()
    this.props.handelShowModal(this.props.title)
  }
  getImage = () => {
    this.props.getImages(this.props.imageUrl)
  }
  render() {

    return (
      <>
        <p id='heart'>💜 {this.state.likes}</p>
        <Card border="dark" style={{ width: '18rem'}}>
          <Card.Body >
            <Card.Title><h2>{this.props.title}</h2></Card.Title>
            <Card.Img onClick={this.handelClick} src={this.props.imageUrl}
            ></Card.Img>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;