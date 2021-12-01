import React, {Component} from 'react';

class Searchbar extends Component{
  render(){
    const elementStyle={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      //left:'10vh',
      height:'5vh',
      width:'100vh',
      marginTop:'5vh',
      marginBottom:'3vh'
    }
    
    return(
      <input
      type="text"
      placeholder="search..."
      style={elementStyle}
      onChange={function(e){
        let keyword = e.target.value;
        this.props.onChange(keyword);
      }.bind(this)}
      />
    )
  }
}

export default Searchbar;