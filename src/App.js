import React,{ Component } from 'react';
import axios from 'axios'
import chuckFace from './chuckFace.png'


class App extends Component{

  state = {
    fact : ''
  }

  componentDidMount(){
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(res=>{
      console.log(res.data.value)
      this.setState({
        fact: res.data.value
      })
    })
  }


  handleChange = () => {
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(res=>{
      console.log(res.data.value)
      this.setState({
        fact: res.data.value
      })
    })

  } 

  

  render () {
  return (
    <div>
      <h1>Chuck Norris Facts</h1>
      {this.state.fact}
      <div> 
        <img src={ chuckFace } alt="chuck norris face"onClick={ this.handleChange} />
        <p>click Chuck for the next fact</p>
      </div> 
 

    </div>
  );
  }
}
export default App;
