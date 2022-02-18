import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import SelectedBeast from './SelectedBeast';
import Form from './Forms';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      beast:{},
      value:{}  
    }
  }
  
  handleCloseModal = () => {
    this.setState({
      showModal: false,      
    })
  }
  handleShowModal = (beast) => {
    this.setState({
      showModal: true,
      beast
    })
  }
  handelSelect = (event) => {
    console.log(event.target.value);
    let select = event.target.value;
      
      
  
  }

  render() {

    return (
    <>
      <SelectedBeast
      handleShowModal={this.state.showModal}
      handleCloseModal={this.handleCloseModal}
      beast={this.state.beast}
      />
      <Header/>
      <Form
        handelSelect={this.handelSelect}
      />
      <Main 
        data={data}
        handleShowModal={this.handleShowModal}
      />
      <Footer/>
    </>
    );
  }
}

export default App;
