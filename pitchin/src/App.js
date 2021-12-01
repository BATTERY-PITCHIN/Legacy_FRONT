import React, { Component } from 'react';
import Head from './components/Head';
import Searchbar from './components/Searchbar';
import Searchlist from './components/Searchlist';
import RecommendList from './components/RecommendList';
import Tab from './components/Tab';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);

    this.state={
      head_title:'PITCH IN',
      search:null
    };
  }

  render(){
    return (
      <div className="App">
        <Head></Head>
        <Searchbar onChange={function(_keyword){
          this.setState({
            search:_keyword
          })
        }.bind(this)}>
        </Searchbar>
        <Searchlist search={this.state.search}>
        </Searchlist>
        <RecommendList></RecommendList>
        <Tab></Tab>
      </div>
    )
  }
}

export default App;