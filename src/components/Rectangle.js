import React from 'react';

class Rectangle extends React.Component{
    state = {
        test: 1
    }
    render(){
        return(
            <div>
                <h1>{this.state.test}</h1>
            </div>
        )
    }
}

export default Rectangle;