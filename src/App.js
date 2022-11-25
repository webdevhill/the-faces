import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from "./components/Register/Register";
import './App.css';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: 'd311b0154e534ad699c05d002fd898f2'
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: [],
      route: 'signin',
      isSignedIn: true
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions.map ((box) => {
      return box.region_info.bounding_box
    })
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
      const box = clarifaiFace.map((face) => {
      return {
        leftCol: face.left_col * width,
        topRow: face.top_row * height,
        rightCol: width - (face.right_col * width),
        bottomRow: height - (face.bottom_row * height)
      }
    });
  return box
}

displayBoundingBox = (box) => {
  this.setState({box: box});
}
  
onInputChange = (event) => {
    this.setState({input: event.target.value});
}
 
onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
      app.models
      .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
      )
    .then(response => this.displayBoundingBox(this.calculateFaceLocation(response))) 
    .catch(err => console.log(err));
}

onRouteChange = (route) => {
  if (route === 'signout') {
    this.setState({isSignedIn: false})
  } else if (route === 'home') {
    this.setState({isSignedIn: true})
  }
  this.setState({route: route});
}

render() {
    const { isSignedIn, imageUrl, box, route } = this.state
    return (
      <div className="App">
      {<div>
        <ParticlesBg  className='particles' type="tadpole" color="#113648" num={100} bg={true} />
      </div>}
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      { route === 'home'
      ? <div> 
      <ParticlesBg  className='particles' type="tadpole" color="#113648" num={100} bg={true} />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition 
          imageUrl={imageUrl}
          box={box}
        />
        </div>
      : (
        route === 'signin'
        ? <SignIn onRouteChange={this.onRouteChange}  />
        : <Register onRouteChange={this.onRouteChange} />
        )  
      }
      </div>
    );
  }
}

export default App;
