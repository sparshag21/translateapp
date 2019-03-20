import React, { Component } from 'react';
import Form from './Components/Form/Form';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
                particles: {
                  number: {
                  value: 200,
                  density: {
                    enable: true,
                    value_area: 800
                   }
                  }
                }
              }

class App extends Component {
  constructor(){
    super();
    this.state = {
      textdata: [],
      input:'',
      translated:'',
      counter:0
    }
  }

    onInputChange = (event) => {
      this.setState({input: event.target.value});
    }

    onButtonSubmit = (event) => {
      console.log('click');
      console.log(this.state.input);
       fetch('https://api.funtranslations.com/translate/sindarin.json?text='+this.state.input)
      .then(res => res.json())
      .then(res =>this.setState({translated: res.contents.translated}))
      .then(()=>{
      var data= {
        id: this.state.counter,
        text: this.state.input,
        translated: this.state.translated 
      };
      this.setState({counter: this.state.counter+1});
      this.state.textdata.push(data);
      console.log(data);})
      .then(()=>{
      console.log(this.state.textdata);});
    }

    reduceCounter = (event) => {
      if(this.state.counter!==0) {
        this.setState({counter: this.state.counter-1});
        this.state.textdata.pop();
        console.log(this.state.textdata);
      }
    }

  render() {
    return (
      <div className="App">
         <Particles className='particles'
              params={particlesOptions}
            />
        <Form onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
        input={this.state.input}
        translated={this.state.translated}/>
        <div className="tc f2 lh-copy pa3 br3 shadow-1 center w-20">
          <p>{this.state.counter}</p>
        </div>
        <div className="tc f2 lh-copy pa3 br3 bg-green center w-10">
          <button onClick={this.reduceCounter}>Pop!</button>
        </div>
      </div>
    );
  }
}

export default App;
