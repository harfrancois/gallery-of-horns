import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal 
      show = {this.props.handleShowModal}
      onHide = {this.props.handleCloseModal}
      size = 'xl'
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img alt={this.props.beast.title} src={this.props.beast.image_url} style={{width: '100%'}}/>
        </Modal.Body>
        <Modal.Footer>{ }</Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
