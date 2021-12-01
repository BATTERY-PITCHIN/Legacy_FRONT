import React, {Component} from 'react';
import Information from '../data/sample';

class Searchlist extends Component{
    render(){
        const styleInfo = {
          //paddingRight:'10px'
          marginTop:'10px'
        }

        const items = Information.filter((data)=>{
            if(this.props.search == null)
                return
            else if(data.name.toLowerCase().includes(this.props.search.toLowerCase()) ||
            data.country.toLowerCase().includes(this.props.search.toLowerCase())){
                if(this.props.search.length == 0)
                    return
                return data
            }
        }).map(data=>{
            return(
                <p>{data.name} {data.age} {data.country}</p>
            )
        })

        return (
            <body>
                <header>
                    <h3>검색 결과</h3>
                </header>
                <div style={styleInfo}>
                    {items}
                </div>
            </body>
            );
    }
} 

export default Searchlist;