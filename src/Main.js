import React from 'react';
import HornedBeast from './HornedBeast';
import './main.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Main extends React.Component {
  render() {


    let hornedBeasts = this.props.data.map((beast, index) => (
      
        <Col key={index}>
        
          <HornedBeast
            
            title={beast.title}
            imageUrl={beast.image_url}
            description={beast.description}
            beast={beast}
            horns={beast.horns}
            handleShowModal={this.props.handleShowModal}
          />
        </Col>

      
    ));

    return (
      <main>
        <Row sm={1} md={2} lg={3}>
          {hornedBeasts}
        </Row>

      </main >
    );
  }
}

export default Main;
