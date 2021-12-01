import React, {Component} from 'react';
import Information from '../data/sample';

class RecommendList extends Component{
    render(){
        const styleInfo = {
          //paddingRight:'100px',
          marginTop:'10px'
        }
        const recommended_items = Information.filter((data)=>{
          /* Write code that show recommended list for each users(founder/factory) */
          return data
      }).map(data=>{
          return(
            <p>{data.name} {data.age} {data.country}</p>
          )
      })
      return (
        <body>
            <header>
                <h3>추천 리스트</h3>
            </header>
            <div style={styleInfo}>
                {recommended_items}
            </div>
        </body>
      );
    }
}
export default RecommendList;