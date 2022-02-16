import React from 'react';
import Card from 'react-bootstrap/Card';
import './hornedBeast.css';

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

  render() {

    return (
      <>
      <p id='heart'>💜 {this.state.likes}</p>
        <Card border="dark" style={{ width: '18rem'}}>
          <Card.Body >
            <Card.Title><h2>{this.props.title}</h2></Card.Title>
            <Card.Img onClick={this.handelLikes} src={this.props.imageUrl}
            ></Card.Img>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
        <br />
      </>

    );
  }
}

export default HornedBeast;