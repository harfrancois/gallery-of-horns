import React from "react";
import { Container, Form, ListGroup, } from "react-bootstrap";

class Forms extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: '1, 2, 3, 100'}
  }
  
  
  render() {
    // let listItem = this.props.data.map((beast, index) => (
    //   <ListGroup.Item key={index}>{listItem}</ListGroup.Item>
    // ))
    return (
      <>
        <Container>
          <Form>
            <Form.Group controlId='selected'>
              <Form.Select onChange={this.props.handleSelect}>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
                <option value='100'>More</option>
              </Form.Select>
            </Form.Group>


            <ListGroup>
              {/* {listItem} */}
            </ListGroup>
          </Form>
        </Container>
      </>
    );
  }
}

export default Forms;

