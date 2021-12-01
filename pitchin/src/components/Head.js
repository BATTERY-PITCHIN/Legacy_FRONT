import React, {Component} from 'react';
import { render } from 'react-dom';

class Head extends Component{
    render(){
        const headStyle={
            //paddingLeft:'750px',
            marginTop:'5vh',
        }

        return (
            <header>
                <h1 style={headStyle}>PITCH IN</h1>
            </header>
        )
    }
}
export default Head;