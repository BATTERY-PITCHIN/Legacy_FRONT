import React, {Component} from 'react';
import Information from '../data/sample';

class Searchlist extends Component{
    render(){
        const styleInfo = {
          paddingRight:'10px'
        }

        //let data=this.props.data;

        const items = Information.filter((data)=>{
            if(this.props.search == null)
                return
            else if(data.name.toLowerCase().includes(this.props.search.toLowerCase()) ||
            data.country.toLowerCase().includes(this.props.search.toLowerCase())){
                return data
            }
        }).map(data=>{
            return(
                <div>
                    <ul>
                        <li style={{position:'relative', left:'10vh'}}>
                            <span style={styleInfo}>{data.name}</span>
                            <span style={styleInfo}>{data.age}</span>
                            <span style={styleInfo}>{data.country}</span>
                        </li>
                    </ul>
                </div>
            )
        })

        return (items);
    }
} 

export default Searchlist;