import {Component} from 'react';

class Tab extends Component{
    state = {
        activeTab:0
    }

    clickHandler = (index) =>{
        this.setState({activeTab:index})
        //console.log(index)
    }

    render(){
        return(
            <div className="wrapper">
                <ul className="tabs">
                    <li onClick={()=>this.clickHandler(0)}>First</li>
                    <li onClick={()=>this.clickHandler(1)}>Second</li>
                    <li onClick={()=>this.clickHandler(2)}>Third</li>
                </ul>
                {/* <div className="contents">
                    <First />
                </div> */}
            </div> 
        );
    }

}
export default Tab;