import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/form"

class Forms extends React.Component {
  render() {

    return (
      <>
        <Container>
          <Form>
            <Form.Group controlId='selected'>
              <Form.Label>Select the numbers of Horns</Form.Label>
              <Form.Select onChange={this.props.handleSelect}>
                <option>All</option>
                <option value='one'>One</option>
                <option value='two'>Two</option>
                <option value='three'>Three</option>
                <option value='more'>More</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Container>
      </>
    );
  }
}

export default Forms;

