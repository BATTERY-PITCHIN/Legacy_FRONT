import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import Searchlist from './components/Searchlist';

class App extends Component{

  constructor(props){
    super(props);

    this.state={
      search:null
    };
  }

  /* searchSpace=(e)=>{
    let keyword=e.target.value;
    this.setState({search:keyword})
  } */

  render(){
    return (
      <div className="App">
        <Searchbar onChange={function(_keyword){
          this.setState({
            search:_keyword
          })
        }.bind(this)}>

        </Searchbar>
        <Searchlist search={this.state.search}>
        </Searchlist>
      </div>
    )
  }
}

export default App;