import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      beast:{},
      data 
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
  handleSelect = (event) => {
    let selected = event.target.value;

    if (selected === 'one') {
      let newBeasts = data.filter((data) => data.horns === 1);
      this.setState({data: newBeasts});
    }
    else if (selected === 'two') {
      let newBeasts = data.filter((data) => data.horns === 2);
      this.setState({data: newBeasts});
    }
    else if (selected === 'three') {
      let newBeasts = data.filter((data) => data.horns === 3);
      this.setState({data: newBeasts});
    }
    else if (selected === 'more') {
      let newBeasts = data.filter((data) => data.horns === 100);
      this.setState({data: newBeasts});
    } else {
      this.setState({data: data});
    }
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
      <Main
         handleSelect={this.handleSelect}
        data={this.state.data}
        handleShowModal={this.handleShowModal}
      />
      <Footer/>
    </>
    );
  }
}

export default App;
