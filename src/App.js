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
      input:'',
      translated:'',
    }
  }

    // componentDidMount() {
    //   fetch('https://api.funtranslations.com/translate/klingon.json?text='+this.state.translated)
    //   .then(res => res.json()).then(res=>console.log(res.error.message))
    //   .then(res =>this.setState({translated: res.error.message}))

    // }

    onInputChange = (event) => {
      this.setState({input: event.target.value});
    }

    onButtonSubmit = (event) => {
      console.log('click');
      console.log(this.state.input);
      // this.setState({translated: this.state.input})
       fetch('https://api.funtranslations.com/translate/klingon.json?text='+this.state.input)
      .then(res => res.json())
      .then(res =>this.setState({translated: res.contents.translated}))
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
      </div>
    );
  }
}

export default App;
