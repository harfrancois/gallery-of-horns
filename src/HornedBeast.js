import React from 'react';
import Card from 'react-bootstrap/Card'

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
      <div>
      <p>💜:{this.state.likes}</p>
        <Card border="dark" style={{ width: '32rem', height: '39rem', overflow: 'auto' }}>
          <Card.Body >
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img style={{width: '30rem', height: '30rem',}} onClick={this.handelLikes} src={this.props.imageUrl}></Card.Img>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>

    );
  }
}

export default HornedBeast;