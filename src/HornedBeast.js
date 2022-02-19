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
  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }
  handleClick = () => {
    this.handleLikes()
    this.props.handleShowModal(this.props.beast)
  }
  render() {

    return (
      <>
        <Card className="h-100" border="dark" style={{ width: '18rem'}}>
          <Card.Body >
            <Card.Title><h2>{this.props.title}</h2></Card.Title>
            <Card.Img onClick={this.handleClick} src={this.props.imageUrl}
            ></Card.Img>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <p id='heart'>💜 {this.state.likes}</p>
          </Card.Footer>
        </Card>
      </>
    );
  }
}

export default HornedBeast;