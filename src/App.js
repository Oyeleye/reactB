import React, { Component } from 'react';
import classing from './App.css';
//import './App.css';
import Ashabi from './Ashabi/Ashabi';


/*const StyledButton = styled.button`
       background-color: ${props => props.alt ? 'red' : 'green'};
       color: white;
       font: inherit;
       border: 1px solid blue;
       padding: 8px;
       cursor: pointer;

       &:hover {
          background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
          color: black;
       }
`;
*/

class App extends Component {
  state= {
    awonAshabi: [
       { id: 'yeh', name: 'Taye', age: 21 },
       { id: 'teh', name: 'Leye', age: 20 },
       { id: 'feh', name: 'Bayo', age: 19 }
    ],
    otherState: 'some other value',
    showAwonAshabi: false,
  };


  nameChangedHandler = (event, id) => {
    const ashabiIndex = this.state.awonAshabi.findIndex(a => {
      return a.id === id;
    });
    
    const ashabi = {
      ...this.state.awonAshabi[ashabiIndex]
     };

ashabi.name = event.target.value;
const awonAshabi = [...this.state.awonAshabi];
awonAshabi[ashabiIndex] = ashabi;

this.setState( {awonAshabi: awonAshabi} );
}


deletePersonHandler = (ashabiIndex) => {
    const awonAshabi =[...this.state.awonAshabi];
    awonAshabi.splice(ashabiIndex, 1);
   this.setState({awonAshabi: awonAshabi});
}


toggleAshabiHandler= () => {
    const doesShow = this.state.showAwonAshabi;
    this.setState({showAwonAshabi: !doesShow});

  }
  


  render() {
       

  let awonAshabi = null;
  let btnClass= '';

  if (this.state.showAwonAshabi) {
    awonAshabi = (
        <div>
               {this.state.awonAshabi.map((ashabi, index) => {
                return <Ashabi 
                click={() => this.deletePersonHandler(index)}            
                name={ashabi.name}
                age={ashabi.age} 
                key={ashabi.id} 
                change= {(event) => this.nameChangedHandler(event, ashabi.id)} />;
            } )}
         </div> 
      ); 

btnClass = classing.Red;
}

const classes = [];
if (this.state.awonAshabi.length <= 2) {
  classes.push(classing.red);
}

if (this.state.awonAshabi.length <=1) {
  classes.push(classing.bold);
}

    return (
       <div className={classing.App}> 
       <p> Listen up</p> 
        <h1> Hey guys </h1>
        <p className={classes.join(' ')}>We are working </p>
       <button 
       
       className={btnClass}
         alt={this.state.showAwonAshabi}
         onClick={this.toggleAshabiHandler}>
         Toggle button</button>
       {awonAshabi} 
      </div>

    );
  }
}

export default App;
