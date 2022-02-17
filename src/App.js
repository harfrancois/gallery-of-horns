import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import { Modal } from 'react-bootstrap';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      name: '',
      image: '',
      about: 'about'
    }
  }
  
  handelCloseModal = () => {
    this.setState({
      showModel: false,      
    })
  }
  handelShowModal = (beast) => {
    this.setState({
      showModal: true,
      name: beast
    })
  }
  getImages = (img) => {
    this.setState({
      image: img
    })
  }
  render() {
    return (
    <>
      <Header />
      <Modal show={this.state.showModal} onHide={this.state.handelCloseModal}>
        <Modal.Header closeButton>
        <Modal.Title>{this.state.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img alt={this.state.name}></img>
        </Modal.Body> 
      </Modal>
      <Main 
        data={data}
        handelShowModal={this.handelShowModal}
        getImage={this.getImage}


      />
      <Footer/>
    </>
    );
  }
}

export default App;
