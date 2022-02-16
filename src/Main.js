import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css'


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
