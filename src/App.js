
import './App.css';
import React from 'react';

//When a parent component state changes all the children under that will be updated or re-rendered
export class ParentComponent extends React.Component {
  constructor(){
    console.log('I am constructor')
    super();
    //State Intitation which will happen only once.
    this.state = {
      names: ['vasudev', 'hunter', 'suneel', 'john', 'Santos' , 'Darek', 'Ridwane'],
    }
  }

  

  componentDidMount(){
    //We can make an API call to the backend server.
    console.log('I am componentDid Mount')
  }

  componentDidUpdate(){
    //We can make an API call here 
    console.log('I am componentDidUpdate')
  }

  render(){
    console.log('I am render')
    return (
      <div>
        <h1>I am Parent </h1>
        <button></button>
      </div>
    )
  }
}
class ChildComponent extends React.Component{
  constructor(){
    super();
    console.log('I am constructor:CHILD');
  }
  componentDidMount(){

    //child u made an api call -> you got updated data 
    console.log('I am componentDidMount:CHILD')
  }
  componentDidUpdate(){
    console.log('I am componentDidUpdate:CHILD')
  }
  render(){
    console.log('I am render:CHILD')
    return (
      <>
        <h1 onClick={()=>alert(this.props.name)}>{this.props.index}.) My name is {this.props.name}</h1>
      </>
    )
  }
}

