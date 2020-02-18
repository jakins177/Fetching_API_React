import React, { Component } from 'react';
//import React from 'react';
import logo from './logo.svg';
import './App.css';


export default  class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          data: [],
        };

      }

    componentDidMount(){
      fetch('https://picsum.photos/v2/list?page=2&limit=20')
        .then((response) => { 
          return response.json(); 
        })
        .then((data) => {
          // console.log(data);
          this.setState(  { data }  )
        })
      }

      render() {
        
        return(
          <div>
            {
              this.state.data.map(same => {
                return <div>{same.author}</div>
              })
            }
          </div>
        )
      }


}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

