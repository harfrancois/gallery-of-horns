import React from 'react';
import HornedBeast from './HornedBeast';
import './main.css'


class Main extends React.Component {
  render() {
    
    let animals = [];
    this.props.data.forEach((animal,index) =>{
      animals.push(
        <HornedBeast
        key={index}
        title={animal.title}
        imageUrl={animal.image_url}
        description={animal.description}
        handelShowModal={this.props.handelShowModal}
        getImage={this.props.getImage}
        />
      )
    });
      
  return(
      <main>
        {animals}
      </main >
    );
  }
}

export default Main;
