import React from 'react';
import HornedBeast from './HornedBeast';
import './main.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Main extends React.Component {
  render() {

    let animals = [];
    this.props.data.forEach((animal, index) => {
      animals.push(
        <Col key={index}>
        
          <HornedBeast
            
            title={animal.title}
            imageUrl={animal.image_url}
            description={animal.description}
            beast={animal}
            handleShowModal={this.props.handleShowModal}
          />
        </Col>

      )
    });

    return (
      <main>
        <Row sm={1} md={2} lg={3}>
          {animals}
        </Row>

      </main >
    );
  }
}

export default Main;
