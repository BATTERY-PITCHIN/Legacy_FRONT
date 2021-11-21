import React, {Component} from 'react';

class Searchbar extends Component{
  render(){
    const elementStyle={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    
    return(
      <div>
        <input
        type="text"
        placeholder="search..."
        style={elementStyle}
        onChange={function(e){
          let keyword = e.target.value;
          this.props.onChange(keyword);
        }.bind(this)}
        />
      </div>
    )
  }
}

export default Searchbar;