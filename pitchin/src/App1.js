import React, { Component } from 'react';
import './App.css';
import searchbar from './components/searchbar';

class App1 extends Component {
  constructor(props){
    super(props);

    this.state={
      search:null
    };
  }

   /* searchSpace = (e)=>{
    let keyword = e.target.value;
    this.setState({search:keyword})
  } */
  

  render(){
    return(
      <div className="App">
        <searchbar
         /*  search={this.state.search}
          searchSpace={function(keyword){
            this.setState({search:keyword})
          }.bind(this)} */
         
          >
        </searchbar>
      </div>
    );
  }
}

export default App1;