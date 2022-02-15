import React, { Component } from "react";
import './App.css';

class App extends Component {

state = {
  name: "Daniel",
  age: 16,
  food: "Mocotó",
  music: [ "SuperGirl - Aimyon", "Oidar - Hether", "Quatro Estações - Kleber Lucas" ]
}

 render() {
   return (
     <div>
         <h1> Meu nome é {this.state.name}</h1>
         <h2> Tenho {this.state.age} anos</h2>
       <h3> Gosto de {this.state.food} </h3>
       <ol> 
         <li>{this.state.music[0]}</li>
         <li>{this.state.music[1]}</li>
         <li>{this.state.music[2]}</li>
         </ol>
     </div>
   );
 }
}
export default App;
